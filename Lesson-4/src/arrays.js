const years = [2020, 2021, 2022, 2023];
const fruits = ['apple', 'banana', 'cherry', 'lemon', 'blueberry'];
const boolean = [true, false, true, false];
const anyArray = [2020, 'apple', true, { key: 'value' }, [1, 2, 3]];

const filteredYears = years.filter((value) => typeof value === 'number');
console.log(filteredYears);

const mappedBoolean = boolean.map((value) => !value);
console.log(mappedBoolean);

fruits.forEach(function(fruit) {
    console.log('I like ' + fruit);
});

const anyArrayTypes = anyArray.map(function(item) {
    return typeof item;
});

console.log(anyArrayTypes);
