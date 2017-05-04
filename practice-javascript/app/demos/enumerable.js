export default () => {

    const peeps = [{name: 'T-Dog', age: 100}, {name: 'Rhi Rhi', age: 27}];
    const names = peeps.map(p => p.name);
    const ages = peeps.map(p => p.age);
    console.log('Map (not mutable) to transform lists', peeps, names, ages);
    console.log('Map with i:', names.map((n, i) => `${i+1}: ${n}`));

    let nums = [-1, 0, 1, 2, 3];
    console.log('Filtering and summing (reduce w/ acc): ', nums.filter(n => n > 0)
                                                             .reduce((acc, n) => acc+=n, 0));
    nums = [1, 2, 3];
    console.log('Reduce w/o acc (undefined): ', nums.reduce((acc, n) => acc+=n));

    const greetingArr = ['Hello', ',', 'there', '.'];
    console.log('Reduce str: ', greetingArr.reduce((acc, n) => n.length > 1 ? `${acc} ${n}` : acc, '').trim());

};
