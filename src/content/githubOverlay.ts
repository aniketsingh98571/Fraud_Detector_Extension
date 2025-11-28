import fetchRiskAnalysis, { type FraudAnalysisResult } from '../utils/fetchRiskAnalysis';
import { createBadRepIcon, createScamIcon, createFraudvisorLogo } from '../utils/riskIcons';
import { getRiskLevel, riskConfigs, getDefaultMessage, type RiskLevel } from '../utils/riskConfig';

const OVERLAY_ID = 'fraudvisor-risk-overlay';
const OVERLAY_STYLE_ID = 'fraudvisor-risk-overlay-styles';

const getStyleContent = (level: RiskLevel): string => {
  const config = riskConfigs[level];
  
  return `
#${OVERLAY_ID}.fixed { position: fixed; }
#${OVERLAY_ID}.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
#${OVERLAY_ID}.z-\\[2147483646\\] { z-index: 2147483646; }
#${OVERLAY_ID}.flex { display: flex; }
#${OVERLAY_ID}.items-center { align-items: center; }
#${OVERLAY_ID}.justify-center { justify-content: center; }
#${OVERLAY_ID}.p-6 { padding: 1.5rem; }
#${OVERLAY_ID}.pointer-events-none { pointer-events: none; }
#${OVERLAY_ID}.bg-slate-900\\/35 { background-color: rgba(15, 23, 42, 0.35); }

#${OVERLAY_ID} .fraudvisor-card.flex { display: flex; }
#${OVERLAY_ID} .fraudvisor-card.flex-col { flex-direction: column; }
#${OVERLAY_ID} .fraudvisor-card.gap-4 { gap: 1rem; }
#${OVERLAY_ID} .fraudvisor-card.max-w-\\[30rem\\] { max-width: 30rem; }
#${OVERLAY_ID} .fraudvisor-card.rounded-2xl { border-radius: 1rem; }
#${OVERLAY_ID} .fraudvisor-card.p-6 { padding: 1.5rem; }
#${OVERLAY_ID} .fraudvisor-card.shadow-2xl { box-shadow: 0 40px 70px -25px ${config.shadowColor}; }
#${OVERLAY_ID} .fraudvisor-card.outline-none { outline: none; }
#${OVERLAY_ID} .fraudvisor-card.pointer-events-auto { pointer-events: auto; }
#${OVERLAY_ID} .fraudvisor-card { 
  background-color: ${config.backgroundColor}; 
  color: ${config.textColor}; 
  border: 1px solid ${config.borderColor}; 
}

#${OVERLAY_ID} .fraudvisor-heading-container.flex { display: flex; }
#${OVERLAY_ID} .fraudvisor-heading-container.items-center { align-items: center; }
#${OVERLAY_ID} .fraudvisor-heading-container.gap-3 { gap: 0.75rem; }

#${OVERLAY_ID} .fraudvisor-heading.text-xl { font-size: 1.35rem; line-height: 1.8rem; }
#${OVERLAY_ID} .fraudvisor-heading.font-semibold { font-weight: 600; }
#${OVERLAY_ID} .fraudvisor-heading { color: #ffffff; }

#${OVERLAY_ID} .fraudvisor-subheading-container.flex { display: flex; }
#${OVERLAY_ID} .fraudvisor-subheading-container.items-center { align-items: center; }
#${OVERLAY_ID} .fraudvisor-subheading-container.gap-2 { gap: 0.5rem; }

#${OVERLAY_ID} .fraudvisor-subheading.text-sm { font-size: 0.95rem; line-height: 1.5rem; }
#${OVERLAY_ID} .fraudvisor-subheading { opacity: 0.9; }

#${OVERLAY_ID} .fraudvisor-message.text-sm { font-size: 0.97rem; line-height: 1.6rem; }
#${OVERLAY_ID} .fraudvisor-message { opacity: 0.95; }

#${OVERLAY_ID} .fraudvisor-actions.flex { display: flex; }
#${OVERLAY_ID} .fraudvisor-actions.items-center { align-items: center; }
#${OVERLAY_ID} .fraudvisor-actions.justify-between { justify-content: space-between; }
#${OVERLAY_ID} .fraudvisor-actions.gap-3 { gap: 0.75rem; }

#${OVERLAY_ID} .fraudvisor-rating.text-xs { font-size: 0.82rem; }
#${OVERLAY_ID} .fraudvisor-rating.font-medium { font-weight: 500; }
#${OVERLAY_ID} .fraudvisor-rating { opacity: 0.85; }

#${OVERLAY_ID} .fraudvisor-dismiss.inline-flex { display: inline-flex; }
#${OVERLAY_ID} .fraudvisor-dismiss.items-center { align-items: center; }
#${OVERLAY_ID} .fraudvisor-dismiss.justify-center { justify-content: center; }
#${OVERLAY_ID} .fraudvisor-dismiss.rounded-full { border-radius: 9999px; }
#${OVERLAY_ID} .fraudvisor-dismiss.px-4 { padding-left: 1rem; padding-right: 1rem; }
#${OVERLAY_ID} .fraudvisor-dismiss.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
#${OVERLAY_ID} .fraudvisor-dismiss.text-sm { font-size: 0.9rem; }
#${OVERLAY_ID} .fraudvisor-dismiss.font-medium { font-weight: 500; }
#${OVERLAY_ID} .fraudvisor-dismiss.transition { transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
#${OVERLAY_ID} .fraudvisor-dismiss { 
  border: none; 
  cursor: pointer; 
  background-color: ${config.buttonBackground}; 
  color: ${config.textColor}; 
}
#${OVERLAY_ID} .fraudvisor-dismiss:hover { 
  box-shadow: ${config.buttonHoverShadow}; 
  transform: translateY(-1px); 
}

#${OVERLAY_ID} .fraudvisor-show-more.inline-flex { display: inline-flex; }
#${OVERLAY_ID} .fraudvisor-show-more.items-center { align-items: center; }
#${OVERLAY_ID} .fraudvisor-show-more.justify-center { justify-content: center; }
#${OVERLAY_ID} .fraudvisor-show-more.rounded-full { border-radius: 9999px; }
#${OVERLAY_ID} .fraudvisor-show-more.px-4 { padding-left: 1rem; padding-right: 1rem; }
#${OVERLAY_ID} .fraudvisor-show-more.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
#${OVERLAY_ID} .fraudvisor-show-more.text-sm { font-size: 0.9rem; }
#${OVERLAY_ID} .fraudvisor-show-more.font-medium { font-weight: 500; }
#${OVERLAY_ID} .fraudvisor-show-more.transition { transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, opacity 0.15s ease-in-out; }
#${OVERLAY_ID} .fraudvisor-show-more { 
  border: 1px solid ${config.borderColor}; 
  cursor: pointer; 
  background-color: transparent; 
  color: ${config.textColor}; 
  text-decoration: none;
}
#${OVERLAY_ID} .fraudvisor-show-more:hover { 
  box-shadow: ${config.buttonHoverShadow}; 
  transform: translateY(-1px); 
  opacity: 0.9;
}
`;
};

const ensureOverlayStyles = (level: RiskLevel) => {
  const existingStyle = document.getElementById(OVERLAY_STYLE_ID);
  if (existingStyle) {
    existingStyle.textContent = getStyleContent(level);
    return;
  }

  const style = document.createElement('style');
  style.id = OVERLAY_STYLE_ID;
  style.textContent = getStyleContent(level);
  document.head.append(style);
};

const handleOverlayDismiss = () => {
  const existingOverlay = document.getElementById(OVERLAY_ID);
  if (!existingOverlay) {
    return;
  }

  existingOverlay.remove();
};


const createOverlay = (analysis: FraudAnalysisResult, level: RiskLevel) => {
  const config = riskConfigs[level];
  
  const overlay = document.createElement('section');
  overlay.id = OVERLAY_ID;
  overlay.className =
    'fixed inset-0 z-[2147483646] flex items-center justify-center p-6 bg-slate-900/35 pointer-events-none';
  overlay.setAttribute('role', 'alert');
  overlay.setAttribute('aria-live', 'assertive');
  overlay.setAttribute('aria-label', `Fraudvisor ${analysis.riskFactor ?? 'risk'} notification`);

  const card = document.createElement('div');
  card.className =
    'fraudvisor-card flex flex-col gap-4 max-w-[30rem] rounded-2xl p-6 shadow-2xl outline-none pointer-events-auto';
  card.tabIndex = 0;

  // Create heading container with icon for medium and high risk
  const headingContainer = document.createElement('div');
  headingContainer.className = 'fraudvisor-heading-container flex items-center gap-3';
  
  // Add icon for medium and high risk
  if (level === 'medium') {
    const icon = createBadRepIcon(40);
    icon.setAttribute('aria-hidden', 'true');
    headingContainer.appendChild(icon);
  } else if (level === 'high' || level === 'very-high') {
    const icon = createScamIcon(40);
    icon.setAttribute('aria-hidden', 'true');
    headingContainer.appendChild(icon);
  }

  const heading = document.createElement('h2');
  heading.className = 'fraudvisor-heading text-xl font-semibold';
  heading.textContent = config.heading;
  headingContainer.appendChild(heading);

  // Create subheading container with logo and text
  const subheadingContainer = document.createElement('div');
  subheadingContainer.className = 'fraudvisor-subheading-container flex items-center gap-2';
  
  // Add Fraudvisor logo
  const logo = createFraudvisorLogo(24);
  logo.setAttribute('aria-hidden', 'true');
  subheadingContainer.appendChild(logo);
  
  const subheading = document.createElement('p');
  subheading.className = 'fraudvisor-subheading text-sm';
  subheading.textContent = `Fraudvisor analysis: ${analysis.riskFactor ?? 'Unknown'} risk level`;
  subheadingContainer.appendChild(subheading);

  const paragraph = document.createElement('p');
  paragraph.className = 'fraudvisor-message text-sm';
  paragraph.textContent = analysis.summary ?? getDefaultMessage(level);

  const actions = document.createElement('div');
  actions.className = 'fraudvisor-actions flex items-center justify-between gap-3';

  const ratingText = document.createElement('span');
  ratingText.className = 'fraudvisor-rating text-xs font-medium';
  ratingText.textContent = Number.isFinite(analysis.rating)
    ? `Risk rating: ${analysis.rating}/10`
    : 'No rating available';

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'fraudvisor-actions flex items-center gap-3';

  // Show More button for medium and high risks
  if (level === 'medium' || level === 'high'|| level==='very-high') {
    const currentUrl = window.location.href;
    
    if (currentUrl) {
      const showMoreButton = document.createElement('a');
      showMoreButton.href = `https://fraudvisor-frontend.onrender.com/website?url=${encodeURIComponent(currentUrl)}`;
      showMoreButton.target = '_blank';
      showMoreButton.rel = 'noopener noreferrer';
      showMoreButton.className =
        'fraudvisor-show-more inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition';
      showMoreButton.textContent = 'Show More';
      showMoreButton.setAttribute('aria-label', 'View detailed risk analysis');
      showMoreButton.setAttribute('tabindex', '0');
      showMoreButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.open(showMoreButton.href, '_blank', 'noopener,noreferrer');
        }
      });
      buttonContainer.append(showMoreButton);
    }
  }


  const dismissButton = document.createElement('button');
  dismissButton.type = 'button';
  dismissButton.className =
    'fraudvisor-dismiss inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition';
  dismissButton.textContent = 'Dismiss';
  dismissButton.addEventListener('click', handleOverlayDismiss);
  dismissButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOverlayDismiss();
    }
  });

  buttonContainer.append(dismissButton);
  actions.append(ratingText, buttonContainer);
  card.append(headingContainer, subheadingContainer, paragraph, actions);
  overlay.append(card);

  return overlay;
};

const renderRiskOverlay = (analysis: FraudAnalysisResult, level: RiskLevel) => {
  ensureOverlayStyles(level);
  const config = riskConfigs[level];

  const existingOverlay = document.getElementById(OVERLAY_ID);
  if (existingOverlay) {
    const headingContainer = existingOverlay.querySelector<HTMLDivElement>('.fraudvisor-heading-container');
    const heading = existingOverlay.querySelector<HTMLHeadingElement>('.fraudvisor-heading');
    const subheading = existingOverlay.querySelector<HTMLParagraphElement>('.fraudvisor-subheading');
    const paragraph = existingOverlay.querySelector<HTMLParagraphElement>('.fraudvisor-message');
    const ratingText = existingOverlay.querySelector<HTMLSpanElement>('.fraudvisor-rating');
    const actions = existingOverlay.querySelector<HTMLDivElement>('.fraudvisor-actions');
    const existingShowMoreButton = existingOverlay.querySelector<HTMLAnchorElement>('.fraudvisor-show-more');

    if (headingContainer && heading) {
      // Remove existing risk icons
      const existingRiskIcons = headingContainer.querySelectorAll('svg');
      existingRiskIcons.forEach(icon => icon.remove());
      
      // Add icon for medium and high risk
      if (level === 'medium') {
        const icon = createBadRepIcon(40);
        icon.setAttribute('aria-hidden', 'true');
        headingContainer.insertBefore(icon, heading);
      } else if (level === 'high' || level === 'very-high') {
        const icon = createScamIcon(40);
        icon.setAttribute('aria-hidden', 'true');
        headingContainer.insertBefore(icon, heading);
      }
      
      heading.textContent = config.heading;
    } else if (heading) {
      heading.textContent = config.heading;
    }

    // Update subheading container with logo
    let subheadingContainer = existingOverlay.querySelector<HTMLDivElement>('.fraudvisor-subheading-container');
    
    if (!subheadingContainer && subheading) {
      // Create subheading container if it doesn't exist
      subheadingContainer = document.createElement('div');
      subheadingContainer.className = 'fraudvisor-subheading-container flex items-center gap-2';
      
      // Add Fraudvisor logo
      const logo = createFraudvisorLogo(24);
      logo.setAttribute('aria-hidden', 'true');
      subheadingContainer.appendChild(logo);
      
      // Move subheading into container
      subheadingContainer.appendChild(subheading);
      
      // Insert container after headingContainer
      if (headingContainer) {
        headingContainer.insertAdjacentElement('afterend', subheadingContainer);
      }
    } else if (subheadingContainer) {
      // Ensure logo exists in subheading container
      let logo = subheadingContainer.querySelector<SVGSVGElement>('#fraudvisor-logo');
      if (!logo) {
        logo = createFraudvisorLogo(24);
        logo.setAttribute('aria-hidden', 'true');
        subheadingContainer.insertBefore(logo, subheadingContainer.firstChild);
      }
      
      if (subheading) {
        subheading.textContent = `Fraudvisor analysis: ${analysis.riskFactor ?? 'Unknown'} risk level`;
      }
    } else if (subheading) {
      subheading.textContent = `Fraudvisor analysis: ${analysis.riskFactor ?? 'Unknown'} risk level`;
    }

    if (paragraph) {
      paragraph.textContent = analysis.summary ?? getDefaultMessage(level);
    }

    if (ratingText) {
      ratingText.textContent = Number.isFinite(analysis.rating)
        ? `Risk rating: ${analysis.rating}/10`
        : 'No rating available';
    }

    // Handle Show More button for medium and high risks
    if (level === 'medium' || level === 'high' || level === 'very-high') {
      const currentUrl = window.location.href;
      
      if (currentUrl && actions) {
        if (existingShowMoreButton) {
          // Update existing button URL
          existingShowMoreButton.href = `https://fraudvisor-frontend.onrender.com/website?url=${encodeURIComponent(currentUrl)}`;
        } else {
          // Create new button
          const showMoreButton = document.createElement('a');
          showMoreButton.href = `https://fraudvisor-frontend.onrender.com/website?url=${encodeURIComponent(currentUrl)}`;
          showMoreButton.target = '_blank';
          showMoreButton.rel = 'noopener noreferrer';
          showMoreButton.className =
            'fraudvisor-show-more inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition';
          showMoreButton.textContent = 'Show More';
          showMoreButton.setAttribute('aria-label', 'View detailed risk analysis');
          showMoreButton.setAttribute('tabindex', '0');
          showMoreButton.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              window.open(showMoreButton.href, '_blank', 'noopener,noreferrer');
            }
          });
          
          const buttonContainer = actions.querySelector<HTMLDivElement>('.fraudvisor-actions.flex.items-center.gap-3');
          const dismissButton = actions.querySelector<HTMLButtonElement>('.fraudvisor-dismiss');
          
          if (buttonContainer && dismissButton) {
            buttonContainer.insertBefore(showMoreButton, dismissButton);
          }
        }
      }
    } else {
      // Remove Show More button for non-medium/high risks
      if (existingShowMoreButton) {
        existingShowMoreButton.remove();
      }
    }

    return;
  }

  const overlay = createOverlay(analysis, level);
  document.body.append(overlay);
};

let latestEvaluationToken = 0;

const evaluateCurrentPageRisk = async () => {
  latestEvaluationToken += 1;
  const evaluationToken = latestEvaluationToken;
  const pageUrl = window.location.href;

  const analysis = await fetchRiskAnalysis(pageUrl);

  if (evaluationToken !== latestEvaluationToken) {
    return;
  }

  if (!analysis) {
    handleOverlayDismiss();
    console.info('[Fraudvisor] No risk analysis available for', pageUrl);
    return;
  }

  const riskLevel = getRiskLevel(analysis.riskFactor);
  
  if (!riskLevel) {
    handleOverlayDismiss();
    console.info('[Fraudvisor] Unknown risk level:', analysis.riskFactor ?? 'Unknown');
    return;
  }

  // Don't show popup for Low risk
  if (riskLevel === 'low'|| riskLevel==='very-low') {
    handleOverlayDismiss();
    console.info('[Fraudvisor] Low risk detected - no popup shown');
    return;
  }

  console.info('[Fraudvisor] Risk detected:', analysis.riskFactor, '- showing overlay');
  renderRiskOverlay(analysis, riskLevel);
};

const handleLocationUpdate = () => {
  window.requestAnimationFrame(evaluateCurrentPageRisk);
};

const interceptHistoryMethods = () => {
  const originalPushState = history.pushState.bind(history);
  const originalReplaceState = history.replaceState.bind(history);

  history.pushState = (...args) => {
    originalPushState(...args);
    handleLocationUpdate();
  };

  history.replaceState = (...args) => {
    originalReplaceState(...args);
    handleLocationUpdate();
  };
};

const initializeOverlay = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', evaluateCurrentPageRisk, { once: true });
  } else {
    evaluateCurrentPageRisk();
  }

  window.addEventListener('popstate', handleLocationUpdate);
  window.addEventListener('hashchange', handleLocationUpdate);
  interceptHistoryMethods();
};

initializeOverlay();
