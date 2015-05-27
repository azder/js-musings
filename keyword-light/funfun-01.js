/**
 * Created by azder on 2015-04-07.
 */

U = (()=> {})();

nth = (index, data) =>  data[index];
circle = (f, g) => (...args) => f(g.apply(U, args));

yank = (indexkey, data) => (Array.isArray(data) ?
    (rest) => (
        rest = data.slice(0),
            [rest.splice(indexkey, 1)[0], rest]
    )
    :
    (rest) => (
        rest = {},
            Object.keys(data).forEach(key => indexkey !== key ? rest[key] = data[key] : U),
            [data[indexkey], rest]
    )
)();

first = nth.bind(U, 0);
second = nth.bind(U, 1);

element = circle(first, yank);
remainder = circle(second, yank);


console.log(element(2, ['a', 'b', 'c', 'd']));
// c
console.log(remainder('b', {a: 1, b: 2, c: 3, d: 4}));
// { a: 1, c: 3, d: 4 }
console.log(remainder(element(2, ['a', 'b', 'c', 'd']), {a: 1, b: 2, c: 3, d: 4}));
// { a: 1, b: 2, d: 4 }



