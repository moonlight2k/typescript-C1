"use strict";
var username = 'max';
var age = 34;
function add1(a, b) {
    var result;
    result = a + b;
    return result;
}
var add2 = function (a, b, c) {
    if (c === void 0) { c = 45; }
    return a + b;
};
var printOutut = function (Output) { return console.log(Output); };
var button1 = document.querySelector('#cf');
if (button1) {
    button1.addEventListener('click', function (event) { return console.log(event); });
}
printOutut(add2(34, 35));
var perrson = {
    firstName: 'Dave',
    age: 34,
};
var hobbies = ['sports', 'typing'];
var activeHobbies = ['boxing'];
activeHobbies.push.apply(activeHobbies, hobbies);
var add3 = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var add4 = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
console.log(add3(23, 42, 323, 26, 65));
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
var firstName = perrson.firstName, date = perrson.age;
