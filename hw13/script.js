'use strict';

//! BURGERS
const SMALL_SIZE = { price: 50, callories: 20 };
const MEDIUM_SIZE = { price: 75, callories: 30 };
const LARGE_SIZE = { price: 100, callories: 40 };

const CHEESE = { price: 10, callories: 20 };
const POTATO = { price: 15, callories: 10 };
const SALAD = { price: 20, callories: 5 };
const MAYO = { price: 20, callories: 5 };
const SPICES = { price: 15, callories: 0 };

const doubleBurger = new Hamburger(SMALL_SIZE);


function Hamburger({ price, callories }) {
    this.price = price;
    this.callories = callories;
}

Hamburger.prototype.addTopping = function ({ price, callories}) {
    return {
        price: this.price += price,
        callories: this.callories += callories,
    }
}
Hamburger.prototype.getPrice = function () {
    return this.price;
}
Hamburger.prototype.getCallories = function () {
    return this.callories;
}

doubleBurger.addTopping(CHEESE);
doubleBurger.addTopping(POTATO);
doubleBurger.addTopping(SALAD);
doubleBurger.addTopping(MAYO);
doubleBurger.addTopping(SPICES);

console.log(`
Prices with additives: ${doubleBurger.getPrice()}
Callories with additives: ${doubleBurger.getCallories()}
`);























// * const hamburger = new Hamburger(SIZE_SMALL);
//* // добавка из майонеза
// * hamburger.addTopping(TOPPING_MAYO);
// * hamburger.addTopping(TOPPING_POTATO);

// * console.log("Price with sauce: “ + hamburger.getPrice());
// * console.log("Callories with sauce: “ + hamburger.getCallories());
















// function Calc() {
//     this.read = function () {
//             this.num1 = +prompt('Enter first number');
//             this.num2 = +prompt('Enter second number');
//     };

//     this.sum = function () {
//         return this.num1 + this.num2;
//     };

//     this.mult = function () {
//         return this.num1 * this.num2;
//     };
// }

// const calc1 = new Calc();
// calc1.read();
// alert(`
// Sum: ${calc1.sum()}, Mult: ${calc1.mult()}
// `)