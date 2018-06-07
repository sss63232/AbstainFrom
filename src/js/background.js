import helper from '../js/util/helper';

// chrome.tabs.onHighlighted.addListener(hightlightInfo => {
//   console.log('------------------------------------');
//   console.log(`onHighlighted`, hightlightInfo);
//   console.log('------------------------------------');
// });

// chrome.tabs.onActivated.addListener(activeInfo => {
//   console.log('------------------------------------');
//   console.log(`onActivated`, activeInfo);
//   console.log('------------------------------------');
// });

const tabsEvents = [
  `onCreated`,
  `onUpdated`,
  `onMoved`,
  `onSelectionChanged`,
  `onActiveChanged`,
  `onActivated`,
  `onHighlightChanged`,
  `onHighlighted`,
  `onDetached`,
  `onAttached`,
  `onRemoved`,
  `onReplaced`,
  `onZoomChange`,
];

helper.listen(`onUpdated`, (tabId, changeInfo, tab) => {
  console.log('------------------------------------');
  console.log('tabId: ', tabId);
  console.log('changeInfo: ', changeInfo);
  console.log('tab: ', tab);
  console.log('------------------------------------');
});
