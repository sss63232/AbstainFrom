import '../img/icon-128.png'
import '../img/icon-34.png'

chrome.tabs.query({active:true},arr_tabs=>{
    arr_tabs.forEach(tab=>{
        console.log('------------------------------------');
        console.log(tab.url);
        console.log('------------------------------------');
    });
});