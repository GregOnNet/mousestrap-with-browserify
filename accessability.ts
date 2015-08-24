import Mousetrap = require('mousetrap');

class Accessability {

  Mousetrap(): MousetrapInstance {
    var moustrap = new Mousetrap(undefined);

    var _globalCallbacks = {};

    moustrap.bindGlobal = function(keys, callback, action) {
        var self = this;
        self.bind(keys, callback, action);

        if (keys instanceof Array) {
            for (var i = 0; i < keys.length; i++) {
                _globalCallbacks[keys[i]] = true;
            }
            return;
        }

        _globalCallbacks[keys] = true;
    };

    return moustrap;
  }
}

export = Accessability;
