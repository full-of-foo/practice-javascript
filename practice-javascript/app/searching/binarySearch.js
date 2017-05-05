const _id = val => val;
const _get = key => (val => val[key]);

export default (array, value, key) => {
    key = !key ? _id : typeof key === 'string' ? _get(key) : key;
    value = key(value);
    let middle = Math.floor(array.length / 2);
    let left = 0;
    let right = array.length;
    while (right >= left) {
        const middleValue = key(array[middle]);
        if (middleValue === value) {
            return middle;
        } else if (middleValue > value) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return -1;
};
