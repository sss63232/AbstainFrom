import '../css/popup.css';
import hello from './popup/example';
import helper from './util/helper';

helper.afterDOMCompleteDo(() => {
  console.log('--------');
  console.log(`sth`);
  console.log('--------');
});
