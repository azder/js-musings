const Human = options => {
    const self = Object();
    self.btype = options && options.btype;
    return self;
};


const Person = (
    (() => {

        const eat = (
            function Person$eat(what) {
                console.log(this.name, 'eats', what)
            }
        );

        return (
            options => {

                const $ = Object();

                $.name = options && ('' + options.name);
                $.age = options && (options.age - 0);

                $.greet = (
                    () => console.log('hello I am', $.name, 'and I have', $.age, 'years')
                );

                $.eat = eat;

                return $;

            }
        );

    })()
);

const adam = Person({
    name: 'Adam',
    age:  2 * 0.002737907006989,
});

const eve = Person({
    name: 'Eve',
    age:  0.002737907006989,
});

adam.greet();
eve.greet();

eve.eat('apple');
adam.eat('apple');


