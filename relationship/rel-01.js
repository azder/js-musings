/**
 * Created by azder on 2015-06-08.
 */


// ALWAYS
'use strict';

import Person from 'person.js';


let man = new Person({
    name: 'Adam', gender: 'm'
});


let woman = new Person({
    name: 'Eve', gender: 'f'
});


if (woman.isBeautiful) {
    man.propose(woman);
    if (man.isRich()) {
        woman.accept(man);
        man.fuck(woman);
    } else {
        man.fap();
    }
} else {
    man.propose(woman);
    if (man.drunk()) {
        woman.accept(man);
        man
            .fuck(woman)
            .then(man => man.wait({time: 'next morning'}))
            .then(man=>man.cry('why oh why?'));
    } else {
        man.fap();
    }
}
