import Accessability = require('./accessability');

var access = new Accessability();
var mousetrap = access.Mousetrap();

mousetrap.bind('command+shift+k', () => {

  alert('You pressed CMD+SHIFT+K');
});

mousetrap.bindGlobal('ctrl+s', () => {

  alert('You pressed CTRL+s');
});
