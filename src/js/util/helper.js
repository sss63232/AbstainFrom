export default {
  getCurrentHighlightedURL() {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
        highlighted: true,
      },
      tabs => {
        const curHighlightedTab = tabs[0];
        if (curHighlightedTab !== undefined) {
          const url = new URL(
            curHighlightedTab.url
          );
          console.log('--------');
          console.log(url);
          console.log('--------');
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
};
