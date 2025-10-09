const car = {
    _make: 'Toyota',
    _model: 'Camry',
    _year: 2020,
    _interiorColor: 'Black',
    _windows: {
        front: 'Tinted',
        back: 'Clear'
    },
    get make() {
        return this._make.toLocaleUpperCase();
    },
    set make(value) {
        this._make = value.toLocaleLowerCase();
    },
    get model() {
        return this._model;
    },
    getSummary() {
        return `${this._year} ${this._make} ${this._model} with ${this._interiorColor} interior and ${this._windows.front} front windows.`;
    }
};

console.log(car.getSummary());

car.make = 'Honda';
console.log('After changing make:');
console.log(car.getSummary());
