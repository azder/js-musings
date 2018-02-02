const {
    X$,
    X$Object,
    X$Null,
    X$Array,
    X$Function,
} = require('./x');


const log = (
    o => console.log({
        'keys':         o[X$._keys_],
        '2str':         o[X$._2str_](o),
        'call':         o[X$._call_](o), //o,
        'call($.test)': o[X$._call_](X$.get(o, 'test')),
    })
);


[
    [X$Object, Object.create(null)],
    [X$Null, Object.create(null)],
    [X$Array, Object.create(null)],
    [X$Function, a => a + 2],
].map(([X$Constructor, $]) => log(
    X$Constructor($, {
        key: 'test',
        val: 1,
    })
));


