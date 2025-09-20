let foods = ["Laing", "Tuyo", "Gulay"];
foods.push("Pasta");
foods.shift();

for (const food of foods) {
    console.log(food);
}

const likedFoods = foods.map(food => `I like ${food}`);
console.log(likedFoods);