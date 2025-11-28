// SVG icons for risk levels - extracted from fraudvisor-fe assets
// Using simplified versions that display the main visual elements

export const createBadRepIcon = (size: number = 50): SVGSVGElement => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 0 296.31 303.32');
  svg.setAttribute('width', size.toString());
  svg.setAttribute('height', size.toString());
  svg.setAttribute('aria-hidden', 'true');
  
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  style.textContent = '.badrep-cls{fill:#e89806}';
  defs.appendChild(style);
  svg.appendChild(defs);
  
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
  // Main shield path
  const shieldPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  shieldPath.setAttribute('d', 'M20.7 105.79C39.21 56.8 86.49 21.96 141.91 21.96s102.7 34.84 121.21 83.82h20.55c1.02-10.16-4.21-20.19-13.62-25-7.82-3.99-13-11.75-13.69-20.51-.98-12.38-10.8-22.21-23.16-23.18a25.23 25.23 0 0 1-20.49-13.7c-5.63-11.06-18.46-16.38-30.26-12.55-8.34 2.71-17.5.89-24.17-4.81-9.43-8.06-23.32-8.06-32.75 0a25.213 25.213 0 0 1-24.17 4.81c-11.8-3.83-24.63 1.49-30.26 12.55a25.215 25.215 0 0 1-20.49 13.7c-12.36.98-22.19 10.81-23.16 23.18a25.25 25.25 0 0 1-13.69 20.51C4.36 85.59-.87 95.62.15 105.79H20.7ZM141.91 36.4c47.21 0 87.86 28.6 105.62 69.39h7.15c-18.14-44.52-61.84-76-112.77-76s-94.63 31.47-112.77 76h7.15C54.04 65 94.69 36.4 141.91 36.4Zm140.67 155.84c-.03-.11-.06-.22-.09-.32h-17.4c-16.93 51.92-65.66 89.44-123.18 89.44S35.65 243.83 18.73 191.92H1.33c-.03.11-.06.22-.09.32-3.83 11.81 1.48 24.65 12.53 30.29 7.82 3.99 13 11.75 13.69 20.51.97 12.38 10.8 22.21 23.16 23.18 8.75.69 16.5 5.88 20.49 13.7 5.63 11.06 18.46 16.38 30.26 12.55 8.34-2.71 17.5-.89 24.17 4.81 9.43 8.06 23.32 8.06 32.75 0 6.67-5.7 15.82-7.52 24.17-4.81 11.8 3.83 24.63-1.49 30.26-12.55a25.215 25.215 0 0 1 20.49-13.7c12.36-.98 22.19-10.81 23.16-23.18a25.25 25.25 0 0 1 13.69-20.51c11.05-5.64 16.37-18.48 12.53-30.29Zm-140.67 81.29c53.04 0 98.25-34.14 114.9-81.61h-7c-16.35 43.76-58.54 75.01-107.9 75.01s-91.55-31.25-107.9-75.01h-7c16.65 47.47 61.85 81.61 114.9 81.61Z');
  shieldPath.setAttribute('class', 'badrep-cls');
  g.appendChild(shieldPath);
  
  // Horizontal lines
  const linesPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  linesPath.setAttribute('d', 'M97.25 95.32h85.43v6.87H97.25zM97.25 192.68h85.43v6.87H97.25z');
  linesPath.setAttribute('class', 'badrep-cls');
  g.appendChild(linesPath);
  
  // Text
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('style', 'font-family: aAppleTea,&quot; font-size: 64.07px; fill: #e89806;');
  text.setAttribute('transform', 'translate(.32 173.74)');
  const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
  tspan.setAttribute('x', '0');
  tspan.setAttribute('y', '0');
  tspan.textContent = 'BAD-REP';
  text.appendChild(tspan);
  g.appendChild(text);
  
  svg.appendChild(g);
  return svg;
};

export const createScamIcon = (size: number = 50): SVGSVGElement => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 0 283.82 303.32');
  svg.setAttribute('width', size.toString());
  svg.setAttribute('height', size.toString());
  svg.setAttribute('aria-hidden', 'true');
  
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  style.textContent = '.scam-cls{fill:#e93c3c}';
  defs.appendChild(style);
  svg.appendChild(defs);
  
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  
  // Main shield path
  const shieldPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  shieldPath.setAttribute('d', 'M20.7 105.79C39.21 56.8 86.49 21.96 141.91 21.96s102.7 34.84 121.21 83.82h20.55c1.02-10.16-4.21-20.19-13.62-25-7.82-3.99-13-11.75-13.69-20.51-.98-12.38-10.8-22.21-23.16-23.18a25.23 25.23 0 0 1-20.49-13.7c-5.63-11.06-18.46-16.38-30.26-12.55-8.34 2.71-17.5.89-24.17-4.81-9.43-8.06-23.32-8.06-32.75 0a25.213 25.213 0 0 1-24.17 4.81c-11.8-3.83-24.63 1.49-30.26 12.55a25.215 25.215 0 0 1-20.49 13.7c-12.36.98-22.19 10.81-23.16 23.18a25.25 25.25 0 0 1-13.69 20.51C4.36 85.59-.87 95.62.15 105.79H20.7ZM141.91 36.4c47.21 0 87.86 28.6 105.62 69.39h7.15c-18.14-44.52-61.84-76-112.77-76s-94.63 31.47-112.77 76h7.15C54.04 65 94.69 36.4 141.91 36.4Zm140.67 155.84c-.03-.11-.06-.22-.09-.32h-17.4c-16.93 51.92-65.66 89.44-123.18 89.44S35.65 243.83 18.73 191.92H1.33c-.03.11-.06.22-.09.32-3.83 11.81 1.48 24.65 12.53 30.29 7.82 3.99 13 11.75 13.69 20.51.97 12.38 10.8 22.21 23.16 23.18 8.75.69 16.5 5.88 20.49 13.7 5.63 11.06 18.46 16.38 30.26 12.55 8.34-2.71 17.5-.89 24.17 4.81 9.43 8.06 23.32 8.06 32.75 0 6.67-5.7 15.82-7.52 24.17-4.81 11.8 3.83 24.63-1.49 30.26-12.55a25.215 25.215 0 0 1 20.49-13.7c12.36-.98 22.19-10.81 23.16-23.18a25.25 25.25 0 0 1 13.69-20.51c11.05-5.64 16.37-18.48 12.53-30.29Zm-140.67 81.29c53.04 0 98.25-34.14 114.9-81.61h-7c-16.35 43.76-58.54 75.01-107.9 75.01s-91.55-31.25-107.9-75.01h-7c16.65 47.47 61.85 81.61 114.9 81.61Z');
  shieldPath.setAttribute('class', 'scam-cls');
  g.appendChild(shieldPath);
  
  // Horizontal lines
  const linesPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  linesPath.setAttribute('d', 'M97.25 95.32h85.43v6.87H97.25zM97.25 192.68h85.43v6.87H97.25z');
  linesPath.setAttribute('class', 'scam-cls');
  g.appendChild(linesPath);
  
  // Text
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('style', 'fill: #e93c3c; font-family: aAppleTea,&quot; font-size: 81.05px;');
  text.setAttribute('transform', 'matrix(1.18 0 0 1 6.46 180)');
  const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
  tspan.setAttribute('x', '0');
  tspan.setAttribute('y', '0');
  tspan.textContent = 'SCAM';
  text.appendChild(tspan);
  g.appendChild(text);
  
  svg.appendChild(g);
  return svg;
};

// Helper functions for React components - return SVG as HTML string
export const getBadRepIconHTML = (size: number = 40): string => {
  const svg = createBadRepIcon(size);
  return svg.outerHTML;
};

export const getScamIconHTML = (size: number = 40): string => {
  const svg = createScamIcon(size);
  return svg.outerHTML;
};

