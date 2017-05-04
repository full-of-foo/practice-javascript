export default () => {
    // Literals
    const a1 = [1, 2, 3];
    const a2 = ['a', 'b', '2'];
    const a3 = [{'a': 1}, a1, (() => 4), a2];
    const a4 = [a1, a2];

    console.log('Arrays: ', a1, a2, a3, a4);
    console.log('Accessing: ', a1[0], a2[0], a3[0], a4[0][0]);

    // Setting and getting values (in- and out-of bounds)
    a1[3] = 'new';
    console.log('Set value: ', a1[3]);
    console.log('Length: ', a1.length);
    a1[6] = 'pew pew';
    console.log('Set (out-of bounds) value: ', a1[6]);
    console.log('Length: ', a1.length); // increases length
    console.log('Array: ', a1);
    console.log('Get (out-of bounds) value: ', a1[100]);
    console.log('Length: ', a1.length); // does not increase length

    // Array constructor
    console.log('Empty: ', new Array());
    console.log('Elements as args: ', new Array(1, 2, 3));
    console.log('Preset len: ', new Array(3));
    console.log('Element as arg: ', new Array('1'));

    // Array manipulation
    const a5 = ['b', 'c', 'd'];
    console.log('Push (mutable) returns new len: ', a5.push('e'), a5);
    console.log('Pop (mutable) returns elem: ', a5.pop(), a5);
    console.log('Unshift (mutable) returns new len: ', a5.unshift('a'), a5);
    console.log('Shift (mutable) returns elem: ', a5.shift(), a5);

    console.log('Concat (with args) returns new array: ', a5.concat(1, 2));
    console.log('Concat (with arr) returns new array: ', a5.concat([1, 2]));
    console.log('Concat (with arr + args) returns new array: ', a5.concat([1], 2));
    console.log('Concat (with nested arr) returns new array: ', a5.concat([1, [2]]));

    const a6 = [1, 2, 3, 4];
    console.log('Slicing from i: ', a6.slice(1));
    console.log('Slicing from -i: ', a6.slice(-(100*100)));
    console.log('Slicing from big i: ', a6.slice(100*100));
    console.log('Slicing from between i\'s: ', a6.slice(1, 3));

    const a7 = [1, 4];
    console.log('Splice (mutable) to add elems: ', a7.splice(1, 0, 2, 3), a7);
    console.log('Splice (mutable) to remove: ', a7.splice(1, 2), a7); // from a7[1] remove the next n-1 elems
    console.log('Splice (mutable) to add/remove (replace): ', a7.splice(0, 2, 'a', 'b'), a7);

    const a8 = [1, 2, 3, 4];
    console.log('CopyWithin (mutable) to shollow copy elem sequencies: ', a8.copyWithin(2));
    console.log('CopyWithin (mutable) from i in seq: ', a8.copyWithin(2, 1));

    const a9 = new Array(5);
    console.log('Fill (mutable) to populate elems: ', a9.fill(1));
    console.log('Fill (mutable) from i: ', a9.fill('a', 1));
    console.log('Fill (mutable) from i and to i: ', a9.fill('b', 2, 4));

    console.log('Reverse (mutable): ', [1, 2, 3, 'unsorted'].reverse());

    const a10 = [6, 4, 5, 'c', 'a', 'b'];
    console.log('Sort (mutable): ', a10.sort());
    console.log('Sort (mutable) with fn: ', a10.sort((curr, prev) => curr > 4 && prev <= 4));

    const a11 = [1, 2, 3];
    delete a11[1];
    console.log('Deleted/never def elem: ', a11, a11.map(elem => 'trying to fill arr'));

    const a12 = ['1', 2, '3', 'GO!'];
    console.log('Joing elems as str on pattern: ', a12.join(','));
};
