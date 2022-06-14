"use strict";
function addn(num1, num2, showResult, phrase) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw console.error('incorrect input');
    }
    let result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
const number1 = 5;
const number2 = 2.4;
const printResult = true;
const resultPhrase = 'Result is: ';
addn(number1, number2, printResult, resultPhrase);
