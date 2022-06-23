"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    console.log('Clicked!  ' + message);
}
if (button) {
    button.addEventListener('mouseover', clickHandler.bind(null, 'Youre welcome'));
}
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics('the data');
