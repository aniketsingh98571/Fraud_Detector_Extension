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

export const createFraudvisorLogo = (size: number = 35): SVGSVGElement => {
  const uniqueId = `fraudvisor-logo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('id', 'fraudvisor-logo');
  svg.setAttribute('viewBox', '0 0 3182.39 3229.93');
  svg.setAttribute('width', size.toString());
  svg.setAttribute('height', size.toString());
  svg.setAttribute('aria-hidden', 'true');
  
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  
  // Create all 5 clipPaths with unique IDs
  const createClipPath = (id: string, pathData: string) => {
    const clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    clipPath.setAttribute('id', `${uniqueId}-${id}`);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('fill', 'none');
    clipPath.appendChild(path);
    return clipPath;
  };
  
  defs.appendChild(createClipPath('clippath', 'M869.49 1368.84c-6.49 298.41 39.45 596.62 136.47 881.48 123.94 363.89 328.4 698.05 599.23 979.62 507.49-225.03 928.83-593.21 1208.78-1056.72 139.55-231.05 241.31-481.78 301.07-742.39 46.69-203.68 67.34-411.75 61.89-619.71-269.77 700.39-836.95 1263.57-1566.48 1546.02l-20.48 7.93-17.68-12.67c-342.86-245.67-589.07-593.3-702.8-983.55'));
  defs.appendChild(createClipPath('clippath-1', 'M1436.58 3158.1c-223.69-262.09-395.15-562-505.04-884.62-130.34-382.67-171-788.79-118.93-1188.15l2.78-21.31 20.65-8.45c380.45-155.79 801.38-189.26 1199.23-100.44-259.87-134.5-539.21-232.9-829.32-291.64-388.32-78.63-790.81-84.72-1181.47-18.01-24.47 262.74-7.09 527.56 52.01 785.34 59.76 260.62 161.52 511.34 301.07 742.39 251.93 417.11 618.35 757.03 1059.03 984.89'));
  defs.appendChild(createClipPath('clippath-2', 'M1830.21 2176.94c639.01-323 1119.66-879.53 1327.66-1548.08C2261.74 26.24 1078.92 0 157.82 550.12c353.95-44.07 714.75-30.61 1064.35 40.17 408.58 82.73 796.35 242.19 1140.14 468.88l19.46 12.82-2.82 22.43c-51.62 410.84-246.86 792.08-548.74 1082.51'));
  defs.appendChild(createClipPath('clippath-3', 'M1718.64 853.79C1207.92 638.33 635.48 582.01 84.59 698.06 16.47 1600.9 457.95 2464.29 1228.65 2969.4 726.99 2380.97 462.3 1644.35 475.22 891.97c435.18-116.52 849.65-129.24 1243.42-38.19'));
  defs.appendChild(createClipPath('clippath-4', 'M944.91 1724.24c60.15 530.51 295.34 1032.55 675.93 1430.56 852.03-395.03 1413.51-1192.19 1485.78-2082.75-282.27 709.5-817.3 1296.93-1505.41 1662.42-323.15-301.99-541.92-638.73-656.3-1010.23'));
  defs.appendChild(createClipPath('clippath-5', 'M2124.46 1928.68c450.57-315.05 787.81-760.77 958.11-1274.83-783.9-507.8-1786.86-574.03-2629.84-188.59 783.94-121.08 1583.66 28.12 2258.84 415-112.03 418.51-307.73 767.98-587.11 1048.42'));
  
  // Create gradients with unique IDs
  const createLinearGradient = (id: string, x1: string, x2: string, y1: string, y2: string, stops: Array<{offset: string, color: string}>) => {
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', `${uniqueId}-${id}`);
    gradient.setAttribute('x1', x1);
    gradient.setAttribute('x2', x2);
    gradient.setAttribute('y1', y1);
    gradient.setAttribute('y2', y2);
    gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
    stops.forEach(stop => {
      const stopEl = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stopEl.setAttribute('offset', stop.offset);
      stopEl.setAttribute('stop-color', stop.color);
      gradient.appendChild(stopEl);
    });
    return gradient;
  };
  
  defs.appendChild(createLinearGradient('linear-gradient', '3152.55', '347.51', '-63.74', '5110.8', [
    { offset: '0', color: '#0131b8' },
    { offset: '1', color: '#15aff7' }
  ]));
  
  defs.appendChild(createLinearGradient('linear-gradient-2', '1792.79', '-1070.91', '2702.7', '-379.36', [
    { offset: '0', color: '#4a1877' },
    { offset: '0.17', color: '#591b87' },
    { offset: '0.52', color: '#8325b1' },
    { offset: '0.99', color: '#c534f5' },
    { offset: '1', color: '#c735f7' }
  ]));
  
  defs.appendChild(createLinearGradient('linear-gradient-3', '1560.31', '1748.61', '1275.22', '1820.9', [
    { offset: '0', color: '#fff' },
    { offset: '1', color: '#2963ee' }
  ]));
  
  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  style.textContent = '.fraudvisor-cls-3{fill:#fff}.fraudvisor-cls-4{fill:#4263eb}.fraudvisor-cls-9{clip-rule:evenodd;fill:none}';
  defs.appendChild(style);
  
  svg.appendChild(defs);
  
  // Create main paths with clip paths
  const createPath = (d: string, fill?: string, className?: string, clipPath?: string) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    let style = '';
    if (fill) {
      style += `fill: ${fill};`;
    }
    if (clipPath) {
      style += `clip-path: url(#${uniqueId}-${clipPath});`;
    }
    if (style) {
      path.setAttribute('style', style);
    }
    if (className) {
      path.setAttribute('class', className);
    }
    return path;
  };
  
  const createGroup = (clipPath: string, children: SVGElement[]) => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('style', `clip-path: url(#${uniqueId}-${clipPath})`);
    children.forEach(child => g.appendChild(child));
    return g;
  };
  
  // Group 1 with clippath
  svg.appendChild(createGroup('clippath', [
    createPath('M863.01 811.11H3182.4v2418.82H863.01z', `url(#${uniqueId}-linear-gradient)`)
  ]));
  
  // Group 2 with clippath-1
  svg.appendChild(createGroup('clippath-1', [
    createPath('M0 578.77h2035.27V3158.1H0z', `url(#${uniqueId}-linear-gradient-2)`)
  ]));
  
  // Paths with clippath-2, 3, 4, 5
  svg.appendChild(createPath('M157.82 0h3000.05v2176.94H157.82z', undefined, 'fraudvisor-cls-4', 'clippath-2'));
  svg.appendChild(createPath('M16.47 582.01h1702.17V2969.4H16.47z', undefined, 'fraudvisor-cls-4', 'clippath-3'));
  svg.appendChild(createPath('M944.91 1072.05h2161.71V3154.8H944.91z', undefined, 'fraudvisor-cls-4', 'clippath-4'));
  svg.appendChild(createPath('M452.73 79.82h2629.85v1848.87H452.73z', undefined, 'fraudvisor-cls-4', 'clippath-5'));
  
  // Lock icon (main shape)
  svg.appendChild(createPath('M1969.67 1423.97c0-141.54-117.05-257.34-260.12-257.34h-164.67c-143.07 0-260.12 115.8-260.12 257.34 0 58.92 20.49 113.21 54.49 156.71-14.83 12.53-24.44 30.94-24.44 51.75 0 37.73 30.92 68.32 69.06 68.32v118.83c0 20.36 16.84 37.01 37.41 37.01h4.25c20.58 0 37.41-16.66 37.41-37.01v26.21c0 19.39 16.04 35.26 35.64 35.26h4.64c19.6 0 35.64-15.86 35.64-35.26v21.79c0 22.64 18.72 41.16 41.61 41.16h4.73c22.88 0 41.61-18.52 41.61-41.16 0 22.64 18.72 41.16 41.61 41.16h4.73c22.88 0 41.61-18.52 41.61-41.16v-21.79c0 19.39 16.04 35.26 35.64 35.26h4.63c19.6 0 35.64-15.86 35.64-35.26v-26.21c0 20.36 16.83 37.01 37.41 37.01h4.25c20.58 0 37.41-16.66 37.41-37.01v-118.83c38.14 0 69.06-30.59 69.06-68.32 0-20.57-9.38-38.8-23.92-51.33 34.2-43.57 54.81-98.03 54.81-157.14Z', `url(#${uniqueId}-linear-gradient-3)`));
  
  // Lock details
  svg.appendChild(createPath('M1490.95 1621.35c-39.5 0-71.82-31.98-71.82-71.06V1431.5l143.65 63.86v54.93c0 39.08-32.32 71.06-71.82 71.06ZM1763.48 1621.35c39.5 0 71.82-31.98 71.82-71.06V1431.5l-143.65 63.86v54.93c0 39.08 32.32 71.06 71.82 71.06ZM1626.8 1710.75l26 45.01 36.15-9.02-62.15-107.61-62.15 107.61 36.15 9.02 26-45.01Z', undefined, 'fraudvisor-cls-3'));
  
  return svg;
};

export const getFraudvisorLogoHTML = (size: number = 35): string => {
  const svg = createFraudvisorLogo(size);
  return svg.outerHTML;
};

