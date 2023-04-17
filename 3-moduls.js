// Modules - Encapsulated Code (only share minimum)

// menerima data menggunakan require

console.log("------------------------------------");

const names = require("./4-names");
const sayHi = require("./5-untils");
const data = require("./6-alternative-flavor");

console.log("-------------OBJECT-----------------");

console.log(names);

console.log("---------------DESTRUCTURING---------------");

// karna name adalah data object kita bisa men destructuring nya

const { first, second } = names;
sayHi("Monica Datubara");
sayHi(first + second);

// atau
console.log("---------------DEFAULT----------------");
// memanggilnya langsung kedalam fungsi/function
// dimana kita akan menggunakan nya di dalam fungsi sayHi

sayHi("Monica Datubara");
sayHi(names.first + names.second);

console.log("-------------ARRAY AND OBJECT DATA-------------------");

// array and object data

console.log(data);

console.log("---------------execute----------------------");

require("./7-mind-grenade");

console.log("--------------------------------");
