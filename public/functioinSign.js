"use strict";
var calc = function (num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    }
    else if (operation === 'sub') {
        return num1 - num2;
    }
};
console.log(calc(5, 5, 'sub'));
