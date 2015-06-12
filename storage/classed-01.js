//noinspection JSUnusedGlobalSymbols

/**
 * Created by azder on 2015-06-12.
 */


//ECMAScript 2015
export default class STORAGE extends Array {

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
        storage.setItem(key, value);
        return previous;
    }

};
