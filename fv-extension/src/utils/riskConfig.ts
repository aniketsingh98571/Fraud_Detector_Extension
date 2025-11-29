export type RiskLevel = 'very-low' | 'low' | 'medium' | 'high' | 'very-high';

export type RiskConfig = {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  buttonBackground: string;
  buttonHoverShadow: string;
  heading: string;
  shadowColor: string;
};

export const riskConfigs: Record<RiskLevel, RiskConfig> = {
  'very-low': {
    backgroundColor: '#064e3b',
    textColor: '#f0fdf4',
    borderColor: 'rgba(34, 197, 94, 0.7)',
    buttonBackground: '#22c55e',
    buttonHoverShadow: '0 22px 45px -20px rgba(34, 197, 94, 0.75)',
    heading: 'Very Low Risk - Safe Website',
    shadowColor: 'rgba(5, 150, 105, 0.35)',
  },
  'low': {
    backgroundColor: '#14532d',
    textColor: '#f0fdf4',
    borderColor: 'rgba(74, 222, 128, 0.7)',
    buttonBackground: '#4ade80',
    buttonHoverShadow: '0 22px 45px -20px rgba(74, 222, 128, 0.75)',
    heading: 'Low Risk - Website Appears Safe',
    shadowColor: 'rgba(22, 163, 74, 0.35)',
  },
  'medium': {
    backgroundColor: '#422006',
    textColor: '#fefce8',
    borderColor: 'rgba(234, 179, 8, 0.8)',
    buttonBackground: '#eab308',
    buttonHoverShadow: '0 22px 45px -20px rgba(234, 179, 8, 0.85)',
    heading: 'Medium Risk - Exercise Caution',
    shadowColor: 'rgba(161, 98, 7, 0.35)',
  },
  'high': {
    backgroundColor: '#4c0519',
    textColor: '#fff1f2',
    borderColor: 'rgba(244, 63, 94, 0.8)',
    buttonBackground: '#f43f5e',
    buttonHoverShadow: '0 22px 45px -20px rgba(244, 63, 94, 0.85)',
    heading: '⚠️ High Risk Website Detected',
    shadowColor: 'rgba(76, 29, 149, 0.45)',
  },
  'very-high': {
    backgroundColor: '#450a0a',
    textColor: '#fef2f2',
    borderColor: 'rgba(220, 38, 38, 0.9)',
    buttonBackground: '#dc2626',
    buttonHoverShadow: '0 22px 45px -20px rgba(220, 38, 38, 0.95)',
    heading: '🚨 CRITICAL RISK DETECTED 🚨',
    shadowColor: 'rgba(127, 29, 29, 0.55)',
  },
};

export const getRiskLevel = (riskFactor?: string): RiskLevel | null => {
  if (!riskFactor) {
    return null;
  }

  const normalized = riskFactor.toLowerCase().trim();

  if (normalized === 'very low') {
    return 'very-low';
  }
  if (normalized === 'low') {
    return 'low';
  }
  if (normalized === 'medium') {
    return 'medium';
  }
  if (normalized === 'high') {
    return 'high';
  }
  if (normalized === 'very high') {
    return 'very-high';
  }

  return null;
};

export const getDefaultMessage = (level: RiskLevel): string => {
  if (level === 'very-low') {
    return 'This website has been analyzed and shows no significant red flags. You can proceed with confidence, but always practice general internet safety.';
  }
  if (level === 'low') {
    return 'This website appears to be legitimate with minimal risk indicators. Always verify important transactions independently.';
  }
  if (level === 'medium') {
    return 'Please exercise caution when interacting with this website. Verify its legitimacy before sharing personal information or making any transactions.';
  }
  if (level === 'high') {
    return 'Exercise extreme caution before sharing personal information, making payments, or engaging with this site. Multiple risk indicators detected.';
  }
  return 'EXTREME CAUTION REQUIRED! This website shows multiple critical red flags. Do NOT share personal information, make payments, or engage with this site under any circumstances.';
};

