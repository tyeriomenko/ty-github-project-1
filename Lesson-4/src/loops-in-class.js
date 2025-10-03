for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
}
console.log('---');
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (const value of arr) {
    if (value < 'c') {
        continue;
    } else if (value >= 'f') {
        break;
    }
    console.log(value);
}

console.log('---');

let cars = 0;
while (cars < 7) {
    console.log(cars);
    cars++;
}

console.log('---');

const outerObj = [];
arr.forEach((value) => {
    if (value < 'd') {
        return;
    }
    outerObj.push(value);
    console.log(value);
});

console.log(outerObj);
