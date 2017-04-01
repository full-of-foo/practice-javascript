export default () => {
    console.log('Built in Math obj (for simple numeric stuff only): ', Math);

    console.log('Number.prototype stuff');

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

    console.log('Math constants');
    console.log('E, root of the natural logarithm', Math.E);
    console.log('PI, ratio of a circle circum to diameter', Math.PI);
    console.log('LN2, natural logarithm of 2', Math.LN2);
    console.log('SQRT2, squart root of 2', Math.SQRT2);
};
