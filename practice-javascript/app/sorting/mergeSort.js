import LinkedList from '../dataStructures/linkedList';

const _merge = (array, cmp, start, middle, end) => {
    const left = new LinkedList();
    const right = new LinkedList();

    const leftSize = middle - start;
    const rightSize = end - middle;
    const maxSize = Math.max(leftSize, rightSize);
    const size = end - start;

    for (let i = 0; i < maxSize; i += 1) {
        if (i < leftSize) left.push(array[start + i]);
        if (i < rightSize) right.push(array[middle + i]);
    }

    let i = 0;
    while (i < size) {
        if (left.first && right.first) {
            if (cmp(left.first.data, right.first.data) > 0) {
                array[start + i] = right.shift().data;
            } else {
                array[start + i] = left.shift().data;
            }
        } else if (left.first) {
            array[start + i] = left.shift().data;
        } else {
            array[start + i] = right.shift().data;
        }
        i += 1;
    }
    return array;
};

const mergeSort = function(array, cmp, start, end) {
    cmp = cmp || ((a, b) => a - b);
    start = start || 0;
    end = end || array.length;
    if (Math.abs(end - start) <= 1) return [];

    const middle = Math.ceil((start + end) / 2);
    mergeSort(array, cmp, start, middle);
    mergeSort(array, cmp, middle, end);

    return _merge(array, cmp, start, middle, end);
};

export default mergeSort;
