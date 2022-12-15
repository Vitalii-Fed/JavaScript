// const a = 180;
// const b = 120;

// if(a > 100 && b > 100) {
//     if(a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     };
// } else {
//     console.log(`${b + 512}`)
// };

//!

// let link = 'https://my-web-site.com.ua';

// if (!link.endsWith('/')) {
//     console.log(link += '/');
// };

//!

// let link = 'https://my-web-site.com.ua';

// if (!link.endsWith('/') && link.includes('my-web-site')) {
//     console.log(link += '/');
// };

//!

// (!link.endsWith('/') && link.includes('my-web-site')) ? link += '/' : null;

//!

// const hours = '1';

// if (hours <= '17') {
//     console.log('"Pending"');
// } else if(hours >= '17' && hours <= '24') {
//     console.log('"Expires"');
// } else {
//     console.log('"Overdue"');
// }

//!

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     };
// };

//!

// const userLogin = prompt('Enter your login');

// if (userLogin === 'Admin') {
//     const pass = prompt('Enter the password');

//     if (pass === `I Admin`) {
//         alert('Hello Admin!')
//     } else if(pass !== `I Admin`){
//         alert('Error password');
//     } else {
//         alert('I don`t know who you are!!!');
//     }

// } else {
//     alert('Canceled');
// };

//!

// function calcBMI() {
//     const weight = +prompt('Enter your weight');
//     const height = +prompt('Enter your height');

//     const humanPow = Math.pow(height, 2);

//     const humanBMI = weight / humanPow;
//     return alert(`Your BMI: ${humanBMI.toFixed(1)}`)
// }

// calcBMI();

//!

