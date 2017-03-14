// Create an empty menubar
var menu = new nw.Menu({type: 'menubar'});

// Create a submenu as the 2nd level menu
var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: 'Zoeken', click: function (){zoek();} }));
submenu.append(new nw.MenuItem({ type: 'separator'}));
submenu.append(new nw.MenuItem({ label: 'Presentielijst', click: function (){presentie();} }));
submenu.append(new nw.MenuItem({ label: 'Absentielijst' }));

// Create and append the 1st level menu to the menubar
menu.append(new nw.MenuItem({
  label: 'Ledenadministratie',
  submenu: submenu
}));

var submenu = new nw.Menu();
submenu.append(new nw.MenuItem({ label: 'Presentielijst' }));
submenu.append(new nw.MenuItem({ label: 'Fotolijst' }));
submenu.append(new nw.MenuItem({ type: 'separator'}));
submenu.append(new nw.MenuItem({ label: 'Nieuwe inschrijvingen' }));
submenu.append(new nw.MenuItem({ label: 'Afdansen' }));

menu.append(new nw.MenuItem({
  label: 'Cursus',
  submenu: submenu
}));

// Assign it to `window.menu` to get the menu displayed
nw.Window.get().menu = menu;
		// Create an empty context menu
		var menu = new nw.Menu();
		// Add some items with label
		menu.append(new nw.MenuItem({
		label: 'Item A',
		click: function(){
		alert('You have clicked at "Item A"');
		}
		}));
		menu.append(new nw.MenuItem({ label: 'Item B' }));
		menu.append(new nw.MenuItem({ type: 'separator' }));
		menu.append(new nw.MenuItem({ label: 'Item C' }));
		// Hooks the "contextmenu" event
		document.body.addEventListener('contextmenu', function(ev) {
		// Prevent showing default context menu
		ev.preventDefault();
		// Popup the native context menu at place you click
		menu.popup(ev.x, ev.y);
		return false;
		}, false);