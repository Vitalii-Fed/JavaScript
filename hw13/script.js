'use strict';

//! BURGERS

// * GOOD EXAMPLE

class Hamburger {
    static SMALL_SIZE = { label: 'Size S', price: 50, callories: 20 };
    static MEDIUM_SIZE = { label: 'Size M', price: 75, callories: 30 };
    static LARGE_SIZE = { label: 'Size L', price: 100, callories: 40 };

    static CHEESE = { label: 'Cheese', price: 10, callories: 20 };
    static POTATO = { label: 'Potato', price: 15, callories: 10 };
    static SALAD = { label: 'Sald', price: 20, callories: 5 };
    static MAYO = { label: 'Mayo', price: 20, callories: 5 };
    static SPICES = { label: 'Spices', price: 15, callories: 0 };

    #toppings = []; // * ИНКАПСУЛЯЦИЯ 
    #size = null;
    #price = 0;
    #callories = 0;

    // get price() {
    //     return this.#price;
    // }

    // get callories() {
    //     return this.#callories;
    // }

    constructor(size) {
        this.#size = size;
        this.#price = size.price;
        this.#callories = size.callories;
    }

    addTopping(topping) {
        this.#toppings.push(topping);

        this.#calculate();
        return this;
    };

    #calculate() {
    this.#price = this.#toppings.reduce(
        (acc, { price }) => acc + price,
        this.#size.price
    );

    this._callories = this._toppings.reduce(
        (acc, { callories }) => acc + callories,
        this._size.callories
    );
    };

    getPrice() {
        return this.#price; // * ИНКАПСУЛЯЦИЯ 
    }

    getCallories() {
        return this.#callories; // * ИНКАПСУЛЯЦИЯ (скритие деталей реализации за интерфесом )
    }
}

class SuperBurger extends Hamburger { // * НАСЛЕДОВАНИЕ  (возможность перенести детали реализации из одного класса в другой)
    isSuper = true;

    constructor(size, topping) {
        super(size);

        this.addTopping(topping);
    }

    getCallories() {
        // return super.getCallories() * 1.2; (расширили поведение родителя) // * ПОЛИМОРФИЗМ (переопределение свойств и методов)
        return 1000; // (полностью переопределили поведение родителя) // * ПОЛИМОРФИЗМ
    }
}

const hum = new SuperBurger(Hamburger.SMALL_SIZE, Hamburger.CHEESE);

//     hum.addTopping(Hamburger.CHEESE)
//     .addTopping(Hamburger.POTATO)
//     .addTopping(Hamburger.SALAD)
//     .addTopping(Hamburger.MAYO)
//     .addTopping(Hamburger.SPICES);

// * GOOD EXAMPLE



// ? NORMAL EXAMPLE

// function Hamburger(size) {
//     this._size = size;
//     this._toppings = [];
//     this._price = size.price;
//     this._callories = size.callories;
// }

// Hamburger.SMALL_SIZE = { label: 'Size S', price: 50, callories: 20 };
// Hamburger.MEDIUM_SIZE = { label: 'Size M', price: 75, callories: 30 };
// Hamburger.LARGE_SIZE = { label: 'Size L', price: 100, callories: 40 };

// Hamburger.CHEESE = { label: 'Cheese', price: 10, callories: 20 };
// Hamburger.POTATO = { label: 'Potato', price: 15, callories: 10 };
// Hamburger.SALAD = { label: 'Sald', price: 20, callories: 5 };
// Hamburger.MAYO = { label: 'Mayo', price: 20, callories: 5 };
// Hamburger.SPICES = { label: 'Spices', price: 15, callories: 0 };

// Hamburger.prototype.addTopping = function (topping) {
//     this._toppings.push(topping);

//     this._calculate();
//     return this;
// };

// Hamburger.prototype._calculate = function () {
//     this._price = this._toppings.reduce(
//         (acc, { price }) => acc + price,
//         this._size.price
//     );

//     this._callories = this._toppings.reduce(
//         (acc, { callories }) => acc + callories,
//         this._size.callories
//     );
// };


// Hamburger.prototype.getPrice = function () {
//     return this._price;
// };

// Hamburger.prototype.getCallories = function () {
//     return this._callories;
// };

// const hum = new Hamburger(Hamburger.SMALL_SIZE);

//     hum.addTopping(Hamburger.CHEESE)
//     .addTopping(Hamburger.POTATO)
//     .addTopping(Hamburger.SALAD)
//     .addTopping(Hamburger.MAYO)
//     .addTopping(Hamburger.SPICES);

// ? NORMAL EXAMPLE


// ! SIMPLE EXAMPLE 
// function Hamburger({ price, callories }) {
//     this.price = price;
//     this.callories = callories;
// }

// Hamburger.prototype.addTopping = function ({ price, callories}) {
//     return {
//         price: this.price += price,
//         callories: this.callories += callories,
//     }
// }
// Hamburger.prototype.getPrice = function () {
//     return this.price;
// }
// Hamburger.prototype.getCallories = function () {
//     return this.callories;
// }

// doubleBurger.addTopping(CHEESE);
// doubleBurger.addTopping(POTATO);
// doubleBurger.addTopping(SALAD);
// doubleBurger.addTopping(MAYO);
// doubleBurger.addTopping(SPICES);

// console.log(`
// Prices with addition: ${doubleBurger.getPrice()}
// Callories with addition: ${doubleBurger.getCallories()}
// `);

// ! SIMPLE EXAMPLE 

// TODO EXAMPLE SETTER GETTER

// class Person {
//     #name = '';
//     #surname = '';

//     get fullName() {
//         return `${this.#name} ${this.#surname}`;
//     }
    
//     set fullName(newName) {
//         const [name, surname] = newName.split(' ');

//         if(!newName) {
//             return;
//         }

//         this.#name = name;
//         this.#surname = surname;
//     }

//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }
// }

// const man = new Person('Alex', 'Smith');

// TODO EXAMPLE SETTER GETTER