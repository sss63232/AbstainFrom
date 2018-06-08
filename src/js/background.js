import helper from '../js/util/helper';

helper.getCurTab(tab => {
  console.log('------------------------------------');
  console.log(tab);
  console.log('------------------------------------');
});

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

helper.listenTabEvent(
  `onUpdated`,
  (tabId, changeInfo, tab) => {
    if (changeInfo.status === `complete`) {
      const url = new URL(tab.url);
      console.log(url.hostname);
    }
  }
);

// helper.listenTabEvent(`onHighlited`,())
