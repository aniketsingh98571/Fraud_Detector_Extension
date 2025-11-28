import { parse } from 'tldts';

type ExtractPrimaryDomain = (rawUrl?: string) => string | undefined;

const extractPrimaryDomain: ExtractPrimaryDomain = (rawUrl) => {
  if (!rawUrl) {
    return undefined;
  }

  const normalizedUrl = rawUrl.includes('://') ? rawUrl : `https://${rawUrl}`;

  try {
    const parsedUrl = new URL(normalizedUrl);
    const result = parse(parsedUrl.href);

    if (result.domain) {
      return result.domain;
    }

    return parsedUrl.hostname;
  } catch {
    return undefined;
  }
};

export default extractPrimaryDomain;

