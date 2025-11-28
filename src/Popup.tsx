import React, { useEffect, useState } from 'react';
import { getActiveTabUrl } from './utils/getActiveTabUrl';
import fetchRiskAnalysis, { type FraudAnalysisResult } from './utils/fetchRiskAnalysis';
import { getRiskLevel, riskConfigs, getDefaultMessage, type RiskLevel } from './utils/riskConfig';
import { getBadRepIconHTML, getScamIconHTML } from './utils/riskIcons';
import extractPrimaryDomain from './utils/extractPrimaryDomain';
import Logo from './assets/Logo';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-slate-600 rounded-full animate-spin"></div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-slate-700">Analyzing website...</p>
        <p className="text-xs text-slate-500">Checking risk factors</p>
      </div>
    </div>
  );
};

const Popup: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string | undefined>();
  const [activeUrl, setActiveUrl] = useState<string | undefined>();
  const [analysis, setAnalysis] = useState<FraudAnalysisResult | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null);

  useEffect(() => {
    const fetchRiskData = async () => {
      setIsLoading(true);
      const url = await getActiveTabUrl();
      const domain = url ? extractPrimaryDomain(url) : undefined;
      setActiveDomain(domain);
      setActiveUrl(url);

      if (url) {
        const riskAnalysis = await fetchRiskAnalysis(url);
        setAnalysis(riskAnalysis);
        if (riskAnalysis) {
          const level = getRiskLevel(riskAnalysis.riskFactor);
          setRiskLevel(level);
        }
      }
      setIsLoading(false);
    };

    fetchRiskData();
  }, []);

  const config = riskLevel ? riskConfigs[riskLevel] : null;

  const handleShowMore = () => {
    if (activeUrl) {
      window.open(
        `https://fraudvisor-frontend.onrender.com/website?url=${encodeURIComponent(activeUrl)}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  if (isLoading) {
    return (
      <div
        className="flex h-[500px] w-[500px] flex-col"
        role="region"
        aria-label="Fraudvisor popup loading"
        tabIndex={0}
      >
        <div className="flex items-center justify-center gap-2 px-6 py-4 border-b border-slate-200">
          <Logo width={24} height={24} />
          <h1 className="text-xl font-semibold text-slate-900">Fraudvisor</h1>
        </div>
        <Loader />
      </div>
    );
  }

  if (!analysis || !riskLevel || !config) {
    return (
      <div
        className="flex h-[500px] w-[500px] flex-col"
        role="region"
        aria-label="Fraudvisor popup"
        tabIndex={0}
      >
        <div className="flex items-center justify-center gap-2 px-6 py-4 border-b border-slate-200">
          <Logo width={24} height={24} />
          <h1 className="text-xl font-semibold text-slate-900">Fraudvisor</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-4 p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-700 mb-2">
              {activeDomain ?? 'Unable to detect active domain'}
            </p>
            {!analysis && (
              <p className="text-sm text-slate-500">
                No risk analysis available for this website.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-[500px] w-[500px] flex-col"
      role="region"
      aria-label="Fraudvisor risk analysis"
      tabIndex={0}
    >
      <div
        className="flex flex-col h-full rounded-none shadow-2xl"
        style={{
          backgroundColor: config.backgroundColor,
          color: config.textColor,
          border: `1px solid ${config.borderColor}`,
          boxShadow: `0 40px 70px -25px ${config.shadowColor}`,
        }}
      >
        <div className="flex flex-col gap-4 p-6 flex-1 overflow-y-auto">
          {/* Heading with icon */}
          <div className="flex items-center gap-3">
            {(riskLevel === 'medium' || riskLevel === 'high' || riskLevel === 'very-high') && (
              <div
                className="flex-shrink-0"
                aria-hidden="true"
                dangerouslySetInnerHTML={{
                  __html: riskLevel === 'medium' ? getBadRepIconHTML(40) : getScamIconHTML(40),
                }}
              />
            )}
            <h2 className="text-xl font-semibold text-white">
              {config.heading}
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-sm opacity-90">
            Fraudvisor analysis: {analysis.riskFactor ?? 'Unknown'} risk level
          </p>

          {/* Message */}
          <p className="text-sm opacity-95 leading-relaxed">
            {analysis.summary ?? getDefaultMessage(riskLevel)}
          </p>

          {/* Spacer to push actions to bottom */}
          <div className="flex-1"></div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-opacity-20" style={{ borderColor: config.borderColor }}>
            <span className="text-xs font-medium opacity-85">
              {Number.isFinite(analysis.rating)
                ? `Risk rating: ${analysis.rating}/10`
                : 'No rating available'}
            </span>

            {(riskLevel === 'medium' || riskLevel === 'high' || riskLevel === 'very-high') && activeDomain && (
              <button
                onClick={handleShowMore}
                className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition hover:opacity-90"
                style={{
                  borderColor: config.borderColor,
                  color: config.textColor,
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = config.buttonHoverShadow;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="View detailed risk analysis"
                tabIndex={0}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;