"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printresult(num) {
    console.log('Result = ' + num);
}
function addAndHandle(Ni, Nii, cb) {
    const result = Ni + Nii;
    cb(result);
    console.log(cb(result));
}
printresult(add(3, 45));
let combineValues;
combineValues = add;
console.log(combineValues(2, 4));
addAndHandle(3, 4, (resul) => {
    console.log(resul);
});
