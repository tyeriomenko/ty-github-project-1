function sumAny(a, b) {
    return a + b;
}

const result = sumAny(1, 2);
const result2 = sumAny(2, '2');
console.log(result);
console.log(result2);

console.log('---');

function logArrayValues(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
logArrayValues(arr1);
logArrayValues(arr2);

console.log('---');

export function filterArrayByType(arr, type) {
    return arr.filter(item => typeof item === type);
}

const mixedArr = [1, 'two', 3, 'four', true, null, undefined, { key: 'value' }, [1, 2, 3]];

console.log(filterArrayByType(mixedArr, 'number'));
console.log(filterArrayByType(mixedArr, 'string'));
console.log(filterArrayByType(mixedArr, 'boolean'));
console.log(filterArrayByType(mixedArr, 'object'));
console.log(filterArrayByType(mixedArr, 'undefined'));
console.log(filterArrayByType(mixedArr, 'function'));

console.log('---');
