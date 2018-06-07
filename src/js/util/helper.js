export default {
  getCurHighlitedHost() {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
        highlighted: true,
      },
      tabs => {
        const curHighlightedTab = tabs[0];
        if (curHighlightedTab !== undefined) {
          const URLObj_currentTab = new URL(curHighlightedTab.url);
          return URLObj_currentTab.host;
        }
      }
    );
  },
  // 检测 DOMContentLoaded 是否已完成
  afterDOMCompleteDo(eventHandler) {
    if (document.readyState === 'complete' || document.readyState !== 'loading') {
      eventHandler();
    } else {
      document.addEventListener('DOMContentLoaded', eventHandler);
    }
  },

  listen(eventName, callback_fn) {
    chrome.tabs[eventName].addEventListener(callback_fn);
  },
};
