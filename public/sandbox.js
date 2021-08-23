"use strict";
var greet = function (num1, num2, num3) {
    console.log(num1 + num2);
    console.log(num3);
};
greet(5, 7);
//the number 3 is an optional parameter
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
