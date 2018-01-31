'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log('hello I am', this.name, 'and I have', this.age, 'years');
    }
}

Person.prototype = {
    eat: function (what) {
        console.log(this.name, 'eats', what)
    }
};

var adam = new Person('Adam', 0.002737907006989);
var eve = new Person('Eve', 2 * 0.002737907006989);

adam.greet();
eve.greet();

eve.eat('apple');
adam.eat('apple');
