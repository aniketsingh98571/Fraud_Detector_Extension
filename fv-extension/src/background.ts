/* eslint-disable no-console */

chrome.runtime.onInstalled.addListener(() => {
  console.log('Background service worker ready.');
});

