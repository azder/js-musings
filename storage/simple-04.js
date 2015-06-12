/**
 * Created by azder on 2015-06-12.
 */


var STORAGE = function (LS, SS) {

    'use strict';
    if (!LS || !SS) {
        return console.error('must be run in a window with localStorage and sessionStorage');
    }


    var gen = function gen(storage) {

        return function (key, value) {

            key = '' + key;
            var previous = storage.getItem(key);

            if (null === value) {
                storage.removeItem(key);
            } else if (void 0 !== value) {
                storage.setItem(key, value);
            }

            return previous;

        };
        
    };

    return {
        local: gen(LS),
        session: gen(SS)
    };

}(localStorage, sessionStorage);
