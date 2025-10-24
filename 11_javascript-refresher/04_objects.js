const aboutMe = {
    name: "Lowe",
    age: 25,
    course: "JavaScript",
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.hobby = "Reading";

aboutMe.introduce();
console.log("Hobby:", aboutMe.hobby);