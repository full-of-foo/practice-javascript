import mergeSort from '../../sorting/mergeSort';

export default () => {
    console.log('Merge sort: O(n log n)');

    console.log('TODO: Note sudo-code and steps here!');

    const a = [1, 0, 5, 10, 7, 3];
    console.log('Merge sort:', mergeSort(a));
};
