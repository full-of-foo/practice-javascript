export default () => {
    console.log('Quick sort: O(n log n)');

    const _swap = (array, i, j) => {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    };

    const _partition = (array, left, right, compare) => {
        const cmp = array[right - 1];
        let minEnd = left;
        let maxEnd;
        for (maxEnd = left; maxEnd < right - 1; maxEnd += 1) {
            if (array[maxEnd] - cmp < 0) {
                _swap(array, maxEnd, minEnd);
                minEnd += 1;
            }
        }
        _swap(array, minEnd, right - 1);
        return minEnd;
    };

    const _sort = (array, left, right, cmp) => {
        if (left < right) {
            const p = _partition(array, left, right, cmp);
            _sort(array, left, p, cmp);
            _sort(array, p + 1, right, cmp);
        }
        return array;
    };

    const quickSort = array => _sort(array, 0, array.length);

    console.log('TODO: Note sudo-code and steps here!');

    const a = [1, 0, 5, 10, 7, 3];
    console.log('Quick sort:', quickSort(a));
};
