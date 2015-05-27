/**
 * Created by azder on 2014-07-05.
 */

void function (log) {

    // ALWAYS
    'use strict';

    // create an array object
    var array = ['one', 'two', 'three'];
    log(array.length, array); // 3 [ 'one', 'two', 'three' ]

    // doesn't actually change the length
    delete array['two']; // 'remove' the property with key 'two', which is missing
    log(array.length, array); // 3 [ 'one', 'two', 'three' ]

    // also doesn't change the length
    array['two'] = 'asdf'; // put 'asdf' as the value to the property with key 'two'
    log(array.length, array); // 3 [ 'one', 'two', 'three', two: 'asdf' ]

    // remove the second element, and reorder, changes the length
    array.splice(1, 1);
    log(array.length, array); // 2 [ 'one', 'three', two: 'asdf' ]

    // numeric properties
    log(array[1], array['1']); // three three

    // vs. non-numeric properties
    log(array[2], array['two']); // undefined 'asdf'


}(console.log.bind(console));
