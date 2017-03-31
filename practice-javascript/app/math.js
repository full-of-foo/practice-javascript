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

};
