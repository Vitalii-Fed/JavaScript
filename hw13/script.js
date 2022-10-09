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

const doubleBurger = new Hamburger(LARGE_SIZE);


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
Prices with addition: ${doubleBurger.getPrice()}
Callories with addition: ${doubleBurger.getCallories()}
`);