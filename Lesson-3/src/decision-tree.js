const a = 2;
const b = '5';

// AND
console.log(a > b && a == b);

console.log('-------1-------');

// OR
console.log(a < b || a == b);
console.log(a > b || a == b);
console.log(a < b || a === b);
console.log(a > b || a === b);

console.log('-------2-------');

// NOT
console.log(!(a > b));
console.log(!(a < b));
console.log(!(a == b));
console.log(!(a != b));
console.log(!(a != b) && (a < b || a == b));

console.log('-------3-------');

// Nullish coalescing
const c = b ?? 'smth else';
console.log(b);

// If-else statement

if (a > b) {
    console.log('a is greater than b');
} else if (a == b) {
    console.log('a is equal to b');
} else {
    console.log('a is less than b');
}

console.log('-------4-------');

const stringFive = '5';
const d = typeof c === 'number' ? c : stringFive;
console.log(d, typeof d);

