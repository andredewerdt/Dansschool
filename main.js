var js = document.createElement('script');
js.src = './mainmenu.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(js);

var js = document.createElement('script');
js.src= './index.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(js);

var win = nw.Window.get();
win.maximize();
