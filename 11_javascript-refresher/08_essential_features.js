const hobbies = ["Jogging", "Drawing", "Cooking"];
hobbies.map(hobby => console.log(hobby));

const student = { name: "Lowe", age: 25 };
const { name, age } = student;
console.log(name, age);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);