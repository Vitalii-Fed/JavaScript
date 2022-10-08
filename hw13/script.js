'use strict';

//! BURGERS
const SMALL_SIZE = {
    price: 100,
    callories: 200,
}

const BIG_SIZE = {
    price: 200,
    callories: 400,
}

const TOPPING_MAYO = {
    price: 15,
    callories: 70,
}

const TOPPING_KETCHUP = {
    price: 10,
    callories: 50,
}

const TOPPING_CHEESE = {
    price: 20,
    callories: 90,
}

function Hamburger({ price, callories }) {
    this.price = price;
    this.callories = callories;
}

Hamburger.prototype.addTopping = function ({ price, callories }) {
    this.price + price;
    this.callores + callories;
}

Hamburger.prototype.getCallories = function ({ callories }) {
    this.callories += this.callories;
}

Hamburger.prototype.getPrice = function ({ price }) {
    this.price += this.price;
}

const brg = new Hamburger(BIG_SIZE);
































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