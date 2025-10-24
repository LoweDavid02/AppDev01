function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Lowe")); 

const square = num => num * num;

console.log(square(5)); 

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

const result = calculator(4, 6);
console.log("Sum:", result.sum, "Product:", result.product);
