/// <reference path="./typings/mousetrap/mousetrap"/>
/// <reference path="./typings/mousetrap/mousetrap-global-bind"/>

import mousetrap  = require('mousetrap');

export class Accessability {

  Mousetrap(): MousetrapInstance {
    var instance = new mousetrap(undefined);
    console.log(instance);
    var _globalCallbacks = {};
    var _originalStopCallback = Mousetrap.prototype.stopCallback;

    instance.bindGlobal = function(keys, callback, action) {
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

    return instance;
  }
}
