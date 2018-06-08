export default {
  getCurTab(callback_fn) {
    chrome.tabs.query(
      {
        active: true,
        // currentWindow: true,
        highlighted: true,
      },
      tabs => callback_fn(tabs[0] || null)
    );
  },

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
          const URLObj_currentTab = new URL(
            curHighlightedTab.url
          );
          return URLObj_currentTab.host;
        }
      }
    );
  },
  // 检测 DOMContentLoaded 是否已完成
  afterDOMCompleteDo(eventHandler) {
    if (
      document.readyState === 'complete' ||
      document.readyState !== 'loading'
    ) {
      eventHandler();
    } else {
      document.addEventListener(
        'DOMContentLoaded',
        eventHandler
      );
    }
  },

  /**
   * 監聽 chrome.tabs Events,
   * 不同事件 callback 可以收到的參數不太一樣，
   * 有的不只一個，
   * 詳情請看：
   * @see https://developer.chrome.com/extensions/tabs
   *
   * @param {string} eventName
   * @param {function} callback_fn
   */
  listenTabEvent(eventName, callback_fn) {
    chrome.tabs[eventName].addListener(callback_fn);
  },
};
