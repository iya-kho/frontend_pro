// 1. Створити клас Людина.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showPersonInfo() {
        return `${this.name}, ${this.age} years old`;
    }
}

// 2. Створити клас Автомобіль.


class Car extends Person {
    constructor(brand, model, year, regNumber) {
        super();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.regNumber = regNumber;
    }

    setOwner(newOwner) {
        if (newOwner.age > 18) {
            this.owner = newOwner;
        } else {
            console.log('Age is below 18 years');
        }
    }

    getOwner() {
        return this.owner;
    }

    showCarInfo() {
        let message = `Car: ${this.brand} ${this.model} ${this.year}, registration number ${this.regNumber}. `
        if (this.owner) {
            message += `Owner: ${this.owner.showPersonInfo()}`;
        }
        console.log(message);
        return message;
    }

}

// Check

let person1 = new Person('Anna', 15);
let person2 = new Person('Stepan', 36);
let person3 = new Person('Olga', 21);

let car1 = new Car('Suzuki', 'Swift', 2007, 'KA1654');
let car2 = new Car('Renault', 'Megane', 2014, 'KA5769');
let car3 = new Car('Volkswagen', 'passat', 2010, 'KA8643');

car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();




