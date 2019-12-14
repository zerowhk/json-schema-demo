const { Person, Car, Animal, CarList } = require('./index');

let valid = Person.validate({
    name: '小明',
    age: 'ddd'
})

console.log(valid)

let v2 = Car.validate({
    model: 'x4',
    brand: 'bmw'
})
console.log(v2)

let v3 = Animal.validate({
    name: 123
})
console.log(v3)

let v4 = CarList.validate([{
    model: 'x4',
}])
console.log(v4)