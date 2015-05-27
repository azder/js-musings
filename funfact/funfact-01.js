/**
 * Created by azder on 2015-04-20.
 */

rec  = f => U => f.apply(U, [() => rec(f).apply(U, arguments)].concat([].slice.call(arguments)));
//rec = (f)=> (...args)=> f((...args)=>rec(f)(...args), ...args)
rec1 = f => a => f(b => rec(f)(b), a);

y    = f => ( x => f(v => x(x)(v)) )( x => f(v => x(x)(v)) );

mem1 = f =>  n => f[n] || (f[n] = f(n));
mem2 = f => (r, n) => f[n] || (f[n] = f(r, n));

dot  = (f, g) => n => f(g(n));

r1m2 = dot(rec1,mem2);
m1r1 = dot(mem1, rec1);
y1m1 = dot(y   , mem1);


m = mem1(     n  => 0 === n ? 1 : n * m(n + (0 > n ? 1 : -1)) );

g = rec(  (r, n) => 0 === n ? 1 : n * r(n + (0 > n ? 1 : -1)) );
h = r1m2( (r, n) => 0 === n ? 1 : n * r(n + (0 > n ? 1 : -1)) );

i = y(    r => n => 0 === n ? 1 : n * r(n + (0 > n ? 1 : -1)) );
j = y1m1( r => n => 0 === n ? 1 : n * r(n + (0 > n ? 1 : -1)) );


console.log( [ m,g,h,i,j ].map( f => 120 === f(5) && -120 === f(-5) ) );
// [ true, true, true, true, true ]






