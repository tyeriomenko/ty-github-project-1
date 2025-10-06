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
    }
};

console.log('This is:' + car.make + ' ' + car.model + ' ' + car._year + ' ' + car._interiorColor + ' ' + car._windows.front + ' ' + car._windows.back);
