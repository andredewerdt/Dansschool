
var js = document.createElement('script');
js.src= './index.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(js);

var js = document.createElement('script');
js.src = './main/mainmenu.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(js);


var js = document.createElement('script');
js.src = './zoek.js';
var head = document.getElementsByTagName('head')[0];
head.appendChild(js);


var win = nw.Window.get();
win.maximize();



