"use strict";
var register = function (uid, item) {
    console.log(item + ' has a uid of ' + uid);
};
var registerAgain = function (user) {
    console.log(user.name + " is " + user.uid + " years old");
};
register(5, 'Gind of dell');
