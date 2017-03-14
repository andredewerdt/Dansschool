
function zoek(){
	prompt('Zoeken','zoekstring');
	//var win = gui.Window.open ('./zoek.html', { focus:true});
	var win =nw.Window.get();
	nw.Window.open('file://'+dirname+'/zoek.html');
};
