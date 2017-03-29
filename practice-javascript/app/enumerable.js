export default () => {

    const peeps = [{name: 'T-Dog', age: 100}, {name: 'Rhi Rhi', age: 27}];
    const names = peeps.map(p => p.name);
    const ages = peeps.map(p => p.age);
    console.log('Map (not mutable) to transform lists', peeps, names, ages);
    console.log('Map with i:', names.map((n, i) => `${i+1}: ${n}`));
};
