// const a = 2;
// const b = '5';
// const d = 'undefined';


// // AND
// console.log(a > b && a == b);

// console.log('--------------');

// // OR
// console.log(a < b || a == b);
// console.log(a > b || a == b);

// console.log('--------------');

// // NOT
// console.log(!(a > b));
// console.log(!(a < b));
// console.log(!(a == b));
// console.log(!(a != b));
// console.log(!(a != b) && (a < b || a == b));

// console.log('--------------');

// // Nullish coalescing
// const c = d ?? 'smth else';
// console.log(c);

// If-else statement
// const a = 2;
// const b = 5;

// if (a > b) {
//     console.log('a is greater than b');
// } else if (a == b) {
//     console.log('a is equal to b');
// } else {
//     console.log('a is less than b');
// }


const b = '5';
const c = 10;

const d = typeof c === 'number' ? c : b;
console.log(d, typeof d);

