/**
 * Created by azder on 2015-06-12.
 */


var STORAGE = function (LS, SS) {

    'use strict';
    if (!LS || !SS) {
        return console.error('must be run in a window with localStorage and sessionStorage');
    }

    var ls = function ls(key, value) {

        key = '' + key;
        var previous = LS.getItem(key);

        if (null === value) {
            LS.removeItem(key);
        } else if (void 0 !== value) {
            LS.setItem(key, value);
        }

        return previous;

    };

    return {
        local: ls
    };

}(localStorage, sessionStorage);
