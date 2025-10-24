const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); 

const user = { name: "Lowe", age: 25 }; 
const extendedUser = { ...user, city: "Manila" };
console.log(extendedUser); 

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10