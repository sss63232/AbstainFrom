import '../css/popup.css';
import helper from './util/helper';

helper.afterDOMCompleteDo(() => {
  const bgPage = chrome.extension.getBackgroundPage();
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
        document.getElementById(`curHost`).textContent = URLObj_currentTab.host;
      }
    }
  );
});
