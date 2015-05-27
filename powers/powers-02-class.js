/**
 * Created by azder on 2015-04-29.
 */

// ALWAYS
'use strict';


class Powers {

    constructor({take}={take: 1}) {
        this.DEFAULT_TAKE = 1;
        this.finite = Number.isFinite || (value => typeof value === "number" && isFinite(value));
        this.count(take);
        this.reset();

    }

    reset() {
        this.array = [1];
    }

    count(n) {
        this.take = this.finite(n) ? n : this.finite(this.take) ? this.take : this.DEFAULT_TAKE;
        return this;
    }

    times(f) {
        for (let i = 0; i < this.take; i++) {
            f(i);
        }
        return this;
    }

    next({replace}={replace: true}) {
        var a = [1];
        for (let i = 0; i < this.array.length; i++) {
            let result = this.array[i] + this.array[i + 1];
            if (result) {
                a.push(result);
            }
        }
        a.push(1);
        if (replace) {
            this.array = a;
        }
        return a;
    }

    print({reset,take}={reset: false}) {
        if (reset) {
            this.reset();
        }
        this.count(take);
        this.count(take).times(i => {
            console.log(this.array.join(', '));
            this.next()
        });
    }

}


let p = new Powers(6);

p.print({take: 3});
p.print({reset: true});
p.print();
