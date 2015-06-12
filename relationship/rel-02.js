/**
 * Created by azder on 2015-06-08.
 */


// ALWAYS
'use strict';


import Person from 'person.js';

let man = new Person({name: 'Adam', gender: 'm'});
let woman = new Person({name: 'Eve', gender: 'f'});

if (!woman.isBeautiful() && !man.drunk()) {
    return man.fap();
}

man.flirt(woman);

if (!man.isRich()) {
    return man.fap();
}

man.fuck(woman)

    .then(man => man.wait({time: 'next morning'}))

    .then(man => woman.isBeautiful()
        ? man.be({like: 'happy'})
        : man.be({like: 'why oh why?'}));




