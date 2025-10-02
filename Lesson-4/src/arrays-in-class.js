const car = [];

car.push('Toyota');
car.push('Camry');
car.push(2020);
car.push('Black');
car.push('Leather');
car.push({
    front: 'Tinted',
    back: 'Clear'
});


console.log(car.length);
console.log(car[2]);

car[2] = 2021;
console.log(car);

const year = car.pop();
console.log(year, car);

console.log('---filtered array---');

const filteredCarDetails = car.filter((item) => typeof item === 'string');
console.log(filteredCarDetails);

console.log('---sorted array---');

const sortedAlphabetically = filteredCarDetails.sort();
console.log(sortedAlphabetically);
