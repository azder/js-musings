/**
 * Created by azder on 2015-04-29.
 */

// ALWAYS
'use strict';


var a, b, n, i, j, result;

n = 4;

a = [1];
b = [1, 1];

console.log(a.join(', '));
console.log(b.join(', '));

for (i = 0; i < n; i++) {
    a = [1];
    for (j = 0; j < b.length; j++) {
        result = b[j] + b[j + 1];
        if (result) {
            a.push(result);
        }
    }
    a.push(1);
    b = a;
    console.log(b.join(', '));
}


