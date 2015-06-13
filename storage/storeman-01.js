//noinspection JSUnusedGlobalSymbols

/**
 * Created by azder on 2015-06-12.
 */

'use strict';

import Storage from './storage-mock-01.js';

//ECMAScript 2015
export default class Storeman {

    constructor(storage) {
        this.storage = storage;
    }

    get(key) {
        return this.storage.getItem(key);
    }

    remove(key) {
        let previous = this.storage.getItem(key);
        this.storage.removeItem(key);
        return previous;
    }

    set(key, value) {
        let previous = this.storage.getItem(key);
        this.storage.setItem(key, value);
        return previous;
    }

    length() {
        return this.storage.length;
    }

};


const key = 'a', val = '5', log = console.log.bind(console);

let store = new Storage(), s = new Storeman(store);

log(store, s);

log(s.get(key), s.set(key, val), s.get(key), s.length(), store.length);

log(s.remove(key), s.get(key), s.length());
