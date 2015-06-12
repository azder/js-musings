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

        if (void 0 === value) {
            return LS.getItem(key);
        }

        if (null === value) {
            return LS.removeItem(key);
        }

        return LS.setItem(key, value);

    };

    return {
        local: ls
    };

}(localStorage, sessionStorage);
