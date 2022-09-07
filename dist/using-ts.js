"use strict";
function addn(num1, num2, showResult, phrase) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw console.error('incorrect input');
    }
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 5;
var number2 = 2.4;
var printResult = true;
var resultPhrase = 'Result is: ';
addn(number1, number2, printResult, resultPhrase);
