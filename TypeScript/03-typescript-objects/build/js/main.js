"use strict";
let stringArr = ['one', 'two', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['Evh', 1984, true];
stringArr[0] = 'Json';
console.log(stringArr);
stringArr.push('heu');
console.log(stringArr);
guitars.unshift('Jhon');
console.log(guitars);
let test = [];
let bands = [];
bands.push('Van Halen');
console.log(bands);
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
myTuple[1] = 42;
console.log(myTuple);
// objects
let muObject;
muObject = [];
console.log(typeof muObject);
muObject = bands;
muObject = {};
console.log(muObject);
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
exampleObj.prop1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
console.log(typeof evh.name, typeof evh.active, typeof evh.albums);
let jp = {
    active: true,
    albums: ['I', 'II', 'IV']
};
console.log(jp);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.C);
