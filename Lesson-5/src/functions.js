function sumAny(a, b, c) {
    return a + b + c;
}

const result = sumAny(1, 2, 5);
const result2 = sumAny(2, '2', 10);
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
