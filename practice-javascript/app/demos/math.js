export default () => {
    console.log('Built in Math obj (for simple numeric stuff only): ', Math);

    console.log('Number.prototype stuff:');
    const a = 1.95;
    console.log('toFixed for fixing decimal (no arg or 0): ', a.toFixed(), a);
    console.log('toFixed (1): ', a.toFixed(1), a);
    console.log('toFixed (2): ', a.toFixed(2), a);
    console.log('toFixed (10): ', a.toFixed(10), a);

    console.log('toExponential for exp notation (no arg or 0): ', a.toExponential(), a);
    console.log('toExponential (1): ', a.toExponential(1), a);
    console.log('toExponential (2): ', a.toExponential(2), a);
    console.log('toExponential (10): ', a.toExponential(10), a);

    console.log('toPrecision for fixing decimal regarless of decimal place (no arg): ', a.toPrecision(), a);
    console.log('toPrecision (1): ', a.toPrecision(1), a);
    console.log('toPrecision (2): ', a.toPrecision(2), a);
    console.log('toPrecision (10): ', a.toPrecision(10), a);

    const b = 24;
    console.log('toString for displaying numbers', b.toString(), b);
    console.log('toString(10) for base 10', b.toString(10), b);
    console.log('toString(16) for hex', b.toString(16), b);
    console.log('toString(8) for oct', b.toString(8), b);
    console.log('toString(2) for bin', b.toString(2), b);

    console.log('Math constants:');
    console.log('E, root of the natural logarithm', Math.E);
    console.log('PI, ratio of a circle circum to diameter', Math.PI);
    console.log('LN2, natural logarithm of 2', Math.LN2);
    console.log('SQRT2, squart root of 2', Math.SQRT2);

    console.log('Exponentiation convenience functions:');
    console.log('Math.pow for x^y: ', Math.pow(2, 3));
    console.log('Math.sqrt for the square root of x: ', Math.sqrt(9));
    console.log('Math.cbrt for the cube root of x: ', Math.cbrt(9));
    console.log('Math.exp for the e^x: ', Math.exp(9));

    console.log('Other convenience functions:');
    console.log('Math.abs for the absolute (postive) val of x : ', Math.abs(-2), Math.abs(2));
    console.log('Math.sign for the trinary bool of x: ', Math.sign(-2), Math.sign(2), Math.sign(0));
    console.log('Math.trunc for the truncated int x : ',Math.trunc(-2.123), Math.trunc(2.123), Math.trunc(2));
    console.log('Math.round for nearest int of x (.5 will round down): ',Math.trunc(-2.5), Math.trunc(2.5), Math.trunc(2.4));
    console.log('Math.min/max for min/max value of args: ', Math.min(1, 0.5, -0.5, 2), Math.max(1, 0.5, -0.5, 2));

    console.log('Trig functions:');
    console.log('Math.sin for the sine x radians: ', Math.sin(Math.PI/2));
    console.log('Math.cos for the cosine x radians: ', Math.cos(Math.PI));
    console.log('Math.tan for the tangent x radians: ', Math.tan(Math.PI/4));

    console.log('Pseudorandom numbers:');
    console.log('Math.random for num >= 0 && num < 1: ', Math.random(), Math.random(), Math.random());
    console.log('\'x + (y - x) * Math.random()\' for num between x and y: ', ((x, y) => x + (y - x) * Math.random())(1, 100));
};
