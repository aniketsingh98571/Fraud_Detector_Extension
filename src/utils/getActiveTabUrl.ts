type BrowserLike = typeof chrome;

const getBrowserApi = (): BrowserLike | undefined => {
  if (typeof globalThis === 'undefined') {
    return undefined;
  }

  const globalBrowser = (globalThis as typeof globalThis & { browser?: BrowserLike }).browser;
  if (globalBrowser) {
    return globalBrowser;
  }

  if ((globalThis as typeof globalThis & { chrome?: BrowserLike }).chrome) {
    return (globalThis as typeof globalThis & { chrome: BrowserLike }).chrome;
  }

  return undefined;
};

const queryActiveTab = async (browserApi: BrowserLike): Promise<chrome.tabs.Tab[]> => {
  const queryOptions: chrome.tabs.QueryInfo = {
    active: true,
    currentWindow: true
  };

  if (browserApi.tabs?.query.length === 1) {
    const tabs = await browserApi.tabs.query(queryOptions);
    return tabs;
  }

  return new Promise<chrome.tabs.Tab[]>((resolve, reject) => {
    try {
      browserApi.tabs?.query(queryOptions, resolve);
    } catch (error) {
      reject(error);
    }
  });
};

import extractPrimaryDomain from './extractPrimaryDomain';

export const getActiveTabUrl = async (): Promise<string | undefined> => {
  const browserApi = getBrowserApi();
  if (!browserApi?.tabs) {
    return undefined;
  }

  try {
    const tabs = await queryActiveTab(browserApi);
    if (!tabs?.length) {
      return undefined;
    }

    const [activeTab] = tabs;
    return activeTab?.url ?? activeTab?.pendingUrl ?? undefined;
  } catch (error) {
    return undefined;
  }
};

export const getActiveTabDomain = async (): Promise<string | undefined> => {
  const activeTabUrl = await getActiveTabUrl();
  if (!activeTabUrl) {
    return undefined;
  }

  return extractPrimaryDomain(activeTabUrl);
};

