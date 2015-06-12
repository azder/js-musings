/**
 * Created by azder on 2015-05-26.
 */

// void operator forces it to be FE, so IIFE
void function (print, n) {

    'use strict';

    var i, text;
    for (i = 1; i < n; i++) {

        text = '';

        if (0 === i % 3) {
            text += 'Fizz';
        }

        if (0 === i % 5) {
            text += 'Buzz';
        }

        print(text ? text : i)
    }

}(console.log.bind(console), 100);
