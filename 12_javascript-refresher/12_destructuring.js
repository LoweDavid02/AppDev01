const person = {
  name: "Lowe", 
  age: 25     
};

const hobbies = ["jogging", "drawing"];

const { name, age } = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}

printName(person);