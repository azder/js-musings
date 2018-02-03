const _null_ = Symbol('_null_');
const _true_ = Symbol('_true_');
const _false_ = Symbol('_false_');

const _protos_ = Symbol('_protos_');
const _call_ = Symbol('_call_');
const _2str_ = Symbol('_2str_');
const _props_ = Symbol('_props_');
const _metas_ = Symbol('_metas_');
const _length_ = Symbol('_length_');

const _key_ = Symbol('_key_');
const _val_ = Symbol('_val_');


const X$Create = (
    () => Object.create(null)
);

const X$nil = (
    ($) => (null === $) || (void 0 === $)
);

const X$df = (
    ($, v) => X$nil(v) ? $ : v
);

const X$null = (
    ($) => $[_protos_].includes(X$Nil)
);

const X$ident = (
    ($) => ($)
);

const X$frozen = (
    ($) => Object.freeze({...$})
);

const X$push = (
    ($, item) => [...$, item]
);

const X$unshift = (
    ($, item) => [item, ...$]
);

const X$padd = X$push;

const X$first = (
    ($) => ($[0])
);

const X$second = (
    ($) => ($[1])
);

const X$last = (
    ($) => ($[$.length - 1])
);

const X$pset = (
    ($, k, v) => {
        X$mset($, _props_, X$push(X$mget($, _props_), k));
        $[k] = v;
        return $;
    }
);

const X$pget = (
    ($, k) => {
        // TODO: @azder: return X$Undefined when missing
        return $[k];
    }
);

const X$mset = (
    ($, k, v) => {
        $[_metas_][k] = v;
        return $;
    }
);

const X$mget = (
    ($, k) => {
        // TODO: @azder: return X$Error when missing
        return X$df(X$metas[k], $[_metas_][k]);
    }
);

const X$length = (
    ($) => $[_props_].length
);

const X$props2str = (
    ($) => X$mget($, _props_).map(k => ('' + k + ':' + $[k]))
);

const X$props2arr = (
    ($) => X$mget($, _props_).map(k => ({[k]: $[k]}))
);


const X$p2str = (
    ($) => {

        const s = X$second(X$mget($, _protos_));

        if (s === X$Arr || s === X$Fun || s === X$Nil) {
            return '';
        }

        const l = X$last(X$mget($, _protos_));

        return l === X$Obj ? '' : '' + l.name + ':';

    }
);

const X$obj2str = (
    ($) => '' + X$p2str($) + '𝜔{' + X$props2str($) + '}𝜔'
);

const X$arr2str = (
    ($) => '' + X$p2str($) + '𝛼[' + X$props2arr($) + ']𝛼'
);

const X$fun2str = (
    ($) => '' + X$p2str($) + '𝜆{(' + X$mget($, _call_) + '),' + X$props2str($) + '}𝜆'
);

const X$nil2str = (
    ($) => '' + X$p2str($) + '𝜈{' + X$props2str($) + '}𝜈'
);


X$metas = {
    [_2str_]:   X$obj2str,
    [_call_]:   X$frozen,
    [_length_]: X$length,
    [_null_]:   _false_,
    [_protos_]: []
};

const X$Obj = (

    function Obj($, ...$$) {

        $[_metas_] = [];

        X$mset($, _props_, []);
        X$mset($, _protos_, [Obj]);

        return $$.reduce(
            ($, {[_key_]: k, [_val_]: v}) => X$pset($, k, v),
            $,
        );

    }

);

const X$Nil = (

    function Nil($, ...$$) {

        $ = X$Obj($, ...$$);

        X$mset($, _protos_, X$padd(X$mget($, _protos_), Nil));
        X$mset($, _2str_, X$nil2str);
        X$mset($, _null_, _true_);

        return $;

    }
);

const X$Arr = (

    function Arr($, ...$$) {

        $ = X$Obj($, ...$$);

        X$mset($, _protos_, X$padd(X$mget($, _protos_), Arr));
        X$mset($, _2str_, X$arr2str);

        return $;

    }

);

const X$Fun = (

    function Fun($, ...$$) {

        $ = X$Obj($, ...$$);

        X$mset($, _protos_, X$padd(X$mget($, _protos_), Fun));
        X$mset($, _2str_, X$fun2str);

        X$mset($, _call_, $);

        return $;

    }

);


const X$constructor = (
    (C$) => ($, ...$$) => C$.call($, {pset: X$pset, mset: X$mset}, $, ...$$)
);


const X$ = X$Obj(
    X$Create(),

    {[_key_]: 'Obj', [_val_]: X$Obj},
    {[_key_]: 'Nil', [_val_]: X$Nil},
    {[_key_]: 'Arr', [_val_]: X$Arr},
    {[_key_]: 'Fun', [_val_]: X$Fun},

    {[_key_]: 'pget', [_val_]: X$pget},
    {[_key_]: 'mget', [_val_]: X$mget},

    {[_key_]: 'C', [_val_]: X$Create},
    {[_key_]: 'c', [_val_]: X$constructor},

    {[_key_]: '_protos_', [_val_]: _protos_},
    {[_key_]: '_props_', [_val_]: _props_},
    {[_key_]: '_2str_', [_val_]: _2str_},
    {[_key_]: '_call_', [_val_]: _call_},
    {[_key_]: '_key_', [_val_]: _key_},
    {[_key_]: '_val_', [_val_]: _val_},
);

module.exports = X$;
