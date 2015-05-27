/**
 * Created by azder on 2015-04-29.
 */

'use strict';

let range = function*(begin, end) {
    for (let i = begin; i < end; i++) {
        yield i;
    }
};

let noop = ()=> (void 0); // function(){}

let next = array => [...array].map((v, i, a) =>  (a[i - 1] || 0) + v).concat([1]);


let powers = (n = 1, cb = noop) => [...range(0, n)].reduce((row, i) => ( cb(row, i), next(row, i) ), [1]);

powers(6, (row, i) => console.log(i + ': ' + row));

console.log(powers(5));


