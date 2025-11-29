type RiskFactorLabel = 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High' | 'Unknown';

export type FraudAnalysisResult = {
  _id?: string;
  url?: string;
  isScam?: boolean;
  riskFactor?: RiskFactorLabel | string;
  rating?: number;
  summary?: string;
  productOrService?: string;
  businessCategory?: string;
  targetAudience?: string;
  createdAt?: string;
  updatedAt?: string;
};

const FRAUDVISOR_ENDPOINT = 'https://fraudvisor-backend.onrender.com/api/v1/website/analyze';

const FRAUDVISOR_HEADERS: Record<string, string> = {
  accept: 'application/json',
  'content-type': 'application/json'
};

const REQUEST_TIMEOUT_MS = 10_000;
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000; // Base delay of 1 second

const responseCache = new Map<string, FraudAnalysisResult | null>();

/**
 * Formats any URL input to extract just the origin (protocol + host) including subdomains.
 * Returns format: https://domain.com or https://subdomain.domain.com
 * 
 * @param rawUrl - Any URL string (with or without protocol, with path/query, etc.)
 * @returns Formatted URL as origin only, or undefined if invalid
 */
const normalizeUrl = (rawUrl: string): string | undefined => {
  if (!rawUrl) {
    return undefined;
  }

  const trimmedUrl = rawUrl.trim();
  if (!trimmedUrl) {
    return undefined;
  }

  let urlString = trimmedUrl;

  // Add https:// if protocol is missing
  if (!/^https?:\/\//i.test(urlString)) {
    urlString = `https://${urlString}`;
  }

  try {
    const url = new URL(urlString);
    
    // Validate protocol (only http/https allowed)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return undefined;
    }

    // Return just the origin (protocol + host) - includes subdomains
    // Always use https:// format (convert http:// to https://)
    return `https://${url.hostname}`;
  } catch {
    return undefined;
  }
};

const isFraudAnalysisResult = (value: unknown): value is FraudAnalysisResult => {
  if (!value || typeof value !== 'object') {
    return false;
  }

  return 'riskFactor' in value || 'summary' in value;
};

const toTitleCase = (value: string): RiskFactorLabel | string => {
  if (!value) {
    return 'Unknown';
  }

  const lowerValue = value.toLowerCase().trim();
  
  // Handle multi-word risk factors
  if (lowerValue === 'very low') {
    return 'Very Low';
  }
  if (lowerValue === 'very high') {
    return 'Very High';
  }
  
  // Handle single-word risk factors
  if (lowerValue === 'high' || lowerValue === 'medium' || lowerValue === 'low') {
    return (lowerValue.charAt(0).toUpperCase() + lowerValue.slice(1)) as RiskFactorLabel;
  }

  return value;
};

const normalizeFraudvisorPayload = (payload: unknown): FraudAnalysisResult | undefined => {
  if (isFraudAnalysisResult(payload)) {
    if (payload.riskFactor && typeof payload.riskFactor === 'string') {
      payload.riskFactor = toTitleCase(payload.riskFactor);
    }

    return payload;
  }

  if (payload && typeof payload === 'object') {
    if ('data' in payload && isFraudAnalysisResult((payload as { data: unknown }).data)) {
      const result = (payload as { data: FraudAnalysisResult }).data;
      if (result.riskFactor && typeof result.riskFactor === 'string') {
        result.riskFactor = toTitleCase(result.riskFactor);
      }

      return result;
    }

    if ('website' in payload && isFraudAnalysisResult((payload as { website: unknown }).website)) {
      const result = (payload as { website: FraudAnalysisResult }).website;
      if (result.riskFactor && typeof result.riskFactor === 'string') {
        result.riskFactor = toTitleCase(result.riskFactor);
      }

      return result;
    }
  }

  return undefined;
};

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => globalThis.setTimeout(resolve, ms));
};

const shouldRetry = (error: unknown, response?: Response): boolean => {
  // Retry on network errors, cancellations, and timeouts
  if (error) {
    const errorName = (error as Error)?.name;
    if (errorName === 'AbortError' || errorName === 'TypeError' || errorName === 'NetworkError') {
      return true;
    }
  }

  // Retry on server errors (5xx) but not client errors (4xx)
  if (response && response.status >= 500) {
    return true;
  }

  return false;
};

const fetchFraudvisorResponseAttempt = async (normalizedUrl: string): Promise<FraudAnalysisResult | undefined> => {
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(FRAUDVISOR_ENDPOINT, {
      method: 'POST',
      headers: FRAUDVISOR_HEADERS,
      body: JSON.stringify({ url: normalizedUrl }),
      mode: 'cors',
      signal: controller.signal
    });

    if (!response.ok) {
      const shouldRetryRequest = shouldRetry(undefined, response);
      if (!shouldRetryRequest) {
        console.warn('[Fraudvisor] Risk analysis request failed:', response.status, response.statusText);
        return undefined;
      }
      // Throw to trigger retry
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const payload = await response.json().catch(() => undefined);
    return normalizeFraudvisorPayload(payload);
  } catch (error) {
    globalThis.clearTimeout(timeoutId);
    
    const shouldRetryRequest = shouldRetry(error);
    if (!shouldRetryRequest) {
      if ((error as Error)?.name === 'AbortError') {
        console.warn('[Fraudvisor] Risk analysis request timed out.');
      } else {
        console.error('[Fraudvisor] Risk analysis request errored.', error);
      }
      throw error; // Re-throw to trigger retry logic
    }
    
    throw error; // Re-throw for retry mechanism
  }
};

const fetchFraudvisorResponse = async (normalizedUrl: string): Promise<FraudAnalysisResult | undefined> => {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await fetchFraudvisorResponseAttempt(normalizedUrl);
      if (result !== undefined) {
        if (attempt > 0) {
          console.info(`[Fraudvisor] Risk analysis request succeeded on attempt ${attempt + 1}`);
        }
        return result;
      }
    } catch (error) {
      const errorName = (error as Error)?.name;
      const isLastAttempt = attempt === MAX_RETRIES;

      if (errorName === 'AbortError') {
        console.warn(`[Fraudvisor] Risk analysis request timed out (attempt ${attempt + 1}/${MAX_RETRIES + 1})`);
      } else {
        console.warn(`[Fraudvisor] Risk analysis request failed (attempt ${attempt + 1}/${MAX_RETRIES + 1}):`, error);
      }

      if (isLastAttempt) {
        console.error('[Fraudvisor] Risk analysis request failed after all retry attempts.');
        return undefined;
      }

      // Exponential backoff: delay increases with each retry (1s, 2s, 4s)
      const delayMs = RETRY_DELAY_MS * Math.pow(2, attempt);
      console.info(`[Fraudvisor] Retrying in ${delayMs}ms...`);
      await sleep(delayMs);
    }
  }

  return undefined;
};

const fetchRiskAnalysis = async (rawUrl: string): Promise<FraudAnalysisResult | undefined> => {
  const normalizedUrl = normalizeUrl(rawUrl);
  if (!normalizedUrl) {
    return undefined;
  }

  if (responseCache.has(normalizedUrl)) {
    return responseCache.get(normalizedUrl) ?? undefined;
  }

  const analysis = await fetchFraudvisorResponse(normalizedUrl);
  responseCache.set(normalizedUrl, analysis ?? null);
  return analysis;
};

export default fetchRiskAnalysis;

