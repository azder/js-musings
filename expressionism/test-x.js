const X$ = require('./x');


const log = (
    ($, n) => console.log({
        [n + '.props']:         X$.mget($, X$._props_),
        [n + '.2str()']:        X$.mget($, X$._2str_)($),
        [n + '.call()']:        X$.mget($, X$._call_)($), //o,
        [n + '.call($.a,$.b)']: X$.mget($, X$._call_)(X$.pget($, 'a'), X$.pget($, 'b')),
    })
);

[
    [X$.C(), X$.Obj, 'o'],
    [X$.C(), X$.Nil, 'n'],
    [X$.C(), X$.Arr, 'a'],
    [(a, b) => a - 0 + b, X$.Fun, 'f'],
].map(([$, C, name]) => log(
    C(
        $,
        {
            [X$._key_]: 'a',
            [X$._val_]: 1,
        },
        {
            [X$._key_]: 'b',
            [X$._val_]: 2,
        },
    ),
    name
));

// const Person = X$.c(
//     ($mutators, $, ...$$) => {
//         console.log('CCC', $mutators, $, $$)
//         $ = X$.Fun($);
//         $mutators.pset($, 'a', 3);
//         $mutators.pset($, 'b', 4);
//         return $;
//     }
// );
//
// log(Person(Object.create(null)), 'person');

