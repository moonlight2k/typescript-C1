"use strict";
function combine(input1, input2, resultType) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultType === 'as number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(20, 30, 'as number');
console.log(combinedAges);
const combinedStringAges = combine('20', '30', 'as number');
console.log(combinedStringAges);
const combinedNames = combine('max', 'jake', 'as text');
console.log(combinedNames);
