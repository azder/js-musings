/**
 * Created by azder on 2015-04-07.
 */


"use strict";

var nth = function(index, data){ return data[index]; };
var circle = function(f, g) { return  f(g.apply(null, arguments)); };

var yank = function(indexkey, data) {
    return Array.isArray(data) ?
        function (rest) {
            return rest = data.slice(0),
                [rest.splice(indexkey, 1)[0], rest]
        }
        :
        function (rest) {
            return rest = {},
                Object.keys(data).forEach(function(key){ return indexkey !== key ? rest[key] = data[key] : true;}),
                [data[indexkey], rest]
        }
}();

var first = nth.bind(null, 0);
var second = nth.bind(null, 1);

var element = circle(first, yank);
var remainder = circle(second, yank);


console.log(element(2, ['a', 'b', 'c', 'd']));
// c
console.log(remainder('b', {a: 1, b: 2, c: 3, d: 4}));
// { a: 1, c: 3, d: 4 }
console.log(remainder(element(2, ['a', 'b', 'c', 'd']), {a: 1, b: 2, c: 3, d: 4}));
// { a: 1, b: 2, d: 4 }



