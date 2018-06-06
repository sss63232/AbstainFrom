import '../css/popup.css';
import hello from './popup/example';
import helper from './util/helper';

helper.afterDOMCompleteDo(() => {
  const bgPage = chrome.extension.getBackgroundPage();
  helper.getCurrentHighlightedURL();
});
