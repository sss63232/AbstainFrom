import '../css/popup.css';
import helper from './util/helper';

helper.afterDOMCompleteDo(() => {
  const bgPage = chrome.extension.getBackgroundPage();
  const host = helper.getCurHighlitedHost();
  bgPage.log(host);
  document.getElementById(
    `curHost`
  ).textContent = host;
});
