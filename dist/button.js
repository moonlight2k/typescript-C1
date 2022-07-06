"use strict";
const button = document.querySelector('#cl');
function clickHandler(message) {
    console.log('Clicked!  ' + message);
}
if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Youre welcome'));
}
function sendAnalytics(data) {
    console.log(data);
}
sendAnalytics('the data');
