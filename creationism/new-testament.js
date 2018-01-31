class Human {
    constructor(btype) {

        this.btype = btype;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = () => {
            console.log('hello I am', this.name, 'and I have', this.age, 'years');
        }
    }

    eat(what) {
        console.log(this.name, 'eats', what)
    }
}

const adam = new Person('Adam', 0.002737907006989);
const eve = new Person('Eve', 2 * 0.002737907006989);

adam.greet();
eve.greet();

eve.eat('apple');
adam.eat('apple');

