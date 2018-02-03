const X$ = require('./x');


const log = (
    ($, n) => {

        const {mget, pget, call} = X$;

        const f = mget($, X$._call_);
        const a = pget($, 'a');
        const b = pget($, 'b');

        return console.log({
            [n + '.*protos']:  mget($, X$._protos_),
            [n + '.*props']:   mget($, X$._props_),
            [n + '.*2str()']:  call(mget($, X$._2str_), $),
            [n + '.*call']:    f,
            [n + '()']:        call(f, $),
            [n + '($.a,$.b)']: call(f, $, a, b),
            [n + '(0)']:       call(f, $, 0),
        })
    }
);

[
    [X$.O(), X$.Obj, 'o'],
    [X$.O(), X$.Nil, 'n'],
    [X$.O(), X$.Arr, 'a'],
    [(a, b) => a - 0 + b, X$.Fun, 'f'],
].map(([$, C, name]) => log(
    C(
        $,
        {[X$._key_]: 'a', [X$._val_]: 1,},
        {[X$._key_]: 'b', [X$._val_]: 2,},
    ),
    name
));

const Person = X$.c(
    ($) => {

        const {pset} = Person[X$._metas_][X$._mutas_];

        $ = X$.Obj($);

        pset($, 'a', 3);
        pset($, 'b', 4);

        return $;

    }
);

log(Person(X$.O()), 'person');

const Adder = X$.c(
    function Adder(a) {

        const $ = X$.Fun(
            ($, b) => b - 0 + X$.pget($, 'fixed'),
            {[X$._key_]: 'fixed', [X$._val_]: a}
        );

        Adder[X$._metas_][X$._mutas_].mset($, X$._protos_, X$.padd($, Adder,));
        return $;
    }
);

log(Adder(30), 'adder30');
log(Adder(40), 'adder40');

