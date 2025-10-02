const car = {};

car.make = 'Toyota';
car['model'] = 'Camry';
car['year'] = 2020;
car['interior color'] = 'Black';
car.windows = {
    front: 'Tinted',
    back: 'Clear'
};

console.log(car);
console.log(JSON.stringify(car));

const wantedCopy = car;
wantedCopy.make = 'Honda';
console.log(car, wantedCopy);

const singleLevelCopy = { ...car };
singleLevelCopy.make = 'Ford';
singleLevelCopy.model = 'Mustang';
console.log('---single level copy---');
console.log(car, singleLevelCopy);

const deepCopy = structuredClone(car);
const deepCopyWithDoubleConversion = JSON.parse(JSON.stringify(car));
deepCopy.windows.front = 'Clear';
deepCopyWithDoubleConversion.windows.front = 'False';
console.log('---deep copy---');
console.log(car, deepCopy, deepCopyWithDoubleConversion);

console.log('\n---object methods---');
const ObjKeys = Object.keys(car);
console.log(ObjKeys);

const ObjValues = Object.values(car);
console.log(ObjValues);

const ObjEntries = Object.entries(car);
console.log(ObjEntries);

const objWithMethod = structuredClone(car);
objWithMethod.objMethod = function() {
    console.log('---objMethod---');
    console.log(this);
    console.log(this.make, this.model);
};
objWithMethod.objMethod();
