"use strict";
var userInput;
var userName;
userInput = 4;
userInput = 'deadt';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 28);
