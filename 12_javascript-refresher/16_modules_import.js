import greet, { myInfo } from "./15_modules_export.js";

console.log(greet(myInfo.name));
console.log(`Name: ${myInfo.name}, Age: ${myInfo.age}`);