/**
 * Created by azder on 2015-06-12.
 */

'use strict';

const MAP = Symbol('map');
const KEYS = Symbol('keys');
const def = Object.defineProperty;

export default class Storage {

    //noinspection JSUnusedGlobalSymbols
    constructor() {
        this.clear();
        def(this, 'length', {
            configurable: false,
            enumerable: false,
            get: ()=> this[KEYS].length
        });
    }

    clear() {
        this[MAP] = Object.create(null);
        this[KEYS] = [];
    }

    key(key) {
        return this[KEYS].indexOf(key);
    }

    getItem(key) {
        return this[MAP][key];
    }

    setItem(key, value) {
        if (null === value) {
            return;
        }
        if (!this[MAP][key]) {
            this[KEYS].push(key);
        }
        this[MAP][key] = value;
    }

    removeItem(key) {
        this[KEYS].splice(this.key(key), 1);
        delete this[MAP][key];
    }


}


