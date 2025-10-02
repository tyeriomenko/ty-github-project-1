const car = new Set();
car.add(1);
car.add('2');
car.has(3) ? car.delete(3) : car.add(3);
const market = car.entries();
console.log(Array.from(market));


const car2 = new Map();
car2.set('1', 1);
car2.set(2, '2');
car2.has('3') ? car2.delete('3') : car2.set('3', { a: 1 });
// const car2Entries = car2.entries();
// const someValue = car2.get('3');
const keys = Array.from(car2.keys());
console.log(keys, car2.keys());
