import binarySearch from '../../searching/binarySearch';

export default () => {
    console.log('Binary search: O(log N)');

    console.log('TODO: Note sudo-code and steps here!');

    const a = [1, 0, 5, 10, 7, 3];
    console.log('Binary search:', a, 5, ": ", binarySearch(a, 5));
};
