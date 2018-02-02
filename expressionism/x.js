const _null_ = Symbol('_null_');
const _true_ = Symbol('_true_');
const _false_ = Symbol('_false_');

const _protos_ = Symbol('_protos_');
const _call_ = Symbol('_call_');
const _2str_ = Symbol('_2str_');
const _keys_ = Symbol('_keys_');
const _length_ = Symbol('_length_');

// const X$call = Function.prototype.call;
// const X$tos = Object.prototype.toString;

const X$nil = (
    ($) => (null === $) || (void 0 === $)
);

const X$null = (
    ($) => $[_protos_].includes(X$Null)
);

const X$ident = (
    ($) => ($)
);

const X$const = (
    ($) => Object.freeze({...$})
);

const X$push = (
    ($, item) => [...$, item]
);

const X$unshift = (
    ($, item) => [item, ...$]
);

const X$protadd = X$push;

const X$first = (
    ($) => ($[0])
);

const X$last = (
    ($) => ($[$.length - 1])
);

const X$set = (
    ($, key, val) => {
        X$push($[_keys_], key);
        $[key] = val;
        return $;
    }
);

const X$get = (
    ($, key) => {
        // TODO: @azder: return X$Undefined when missing
        return $[key];
    }
);

X$length = (
    ($) => $[_keys_].length
);

const X$props2str = (
    ($) => $[_keys_].map(key => ('' + key + ':' + $[key]))
);

const X$proto2str = (
    ($) => X$last($[_protos_]).name //$[_protos_].map(p => p.name) //X$first($[_protos_]).name
);

const X$object2str = (
    ($) => '' + X$proto2str($) + ':𝜔{' + X$props2str($) + '}𝜔'
);

const X$array2str = (
    ($) => '' + X$proto2str($) + ':𝛼[' + X$props2str($) + ']𝛼'
);

const X$function2str = (
    ($) => '' + X$proto2str($) + ':𝜆{' + $[_call_] + ',' + X$props2str($) + '}𝜆'
);

const X$Object = ((() => {

    return (

        function X$Object($, ...$$) {

            $[_protos_] = [X$Object];
            $[_keys_] = $$.map(({key}) => key);

            $[_2str_] = X$object2str;
            $[_call_] = X$const; // X$ident;
            $[_length_] = X$length;

            $[_null_] = _false_;

            $$.forEach(({key, val}) => X$set($, key, val));

            return $;

        }

    );

})());

const X$Null = ((() => {

    return (

        function X$Null($, ...$$) {

            $ = X$Object($, ...$$);
            $[_protos_] = X$protadd($[_protos_], X$Null);
            $[_null_] = _true_;
            return $;

        }
    );

})());

const X$Array = ((() => {

    return (

        function X$Array($, ...$$) {

            $ = X$Object($, ...$$);
            $[_protos_] = X$protadd($[_protos_], X$Array);
            $[_2str_] = X$array2str;
            return $;

        }

    );

})());

const X$Function = ((() => {

    return (

        function X$Function($, ...$$) {

            $ = X$Object($, ...$$);
            $[_protos_] = X$protadd($[_protos_], X$Function);
            $[_2str_] = X$function2str;
            $[_call_] = $;
            return $;

        }

    );

})());


module.exports = {
    X$: {
        get: X$get,
        _protos_,
        _keys_,
        _2str_,
        _call_,
    },
    X$Object,
    X$Null,
    X$Array,
    X$Function,
};
