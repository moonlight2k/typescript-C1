"use strict";
const username = 'max';
let age = 34;
age = 24;
function add1(a, b) {
    let result;
    result = a + b;
    return result;
}
const add2 = (a, b) => a + b;
const printOutut = (Output) => console.log(Output);
const button1 = document.querySelector('#cf');
if (button1) {
    button1.addEventListener('click', (event) => console.log(event));
}
printOutut(add2(34, 35));
