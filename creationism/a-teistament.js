const Human = options => {
    const self = Object();
    self.btype = options && options.btype;
    return self;
};


const Person = (() => {

    const eat = (
        function eat(what) {
            console.log(this.name, 'eats', what)
        }
    );

    return (
        options => {

            const self = Object();

            self.name = options && ('' + options.name);
            self.age = options && (options.age - 0);

            self.greet = (
                () => console.log('hello I am', self.name, 'and I have', self.age, 'years')
            );

            self.eat = eat;

            return self;

        }
    );

})();

const adam = Person({
    name: 'Adam',
    age:  0.002737907006989,
});

const eve = Person({
    name: 'Eve',
    age:  2 * 0.002737907006989,
});

adam.greet();
eve.greet();

eve.eat('apple');
adam.eat('apple');


