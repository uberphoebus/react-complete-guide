// variables
var myName = "max";
console.log(myName);
// ------------------------------

// arrow functions
function printMyName(name) {
    console.log(name);
}
const printMyName2 = (name) => {
    console.log(name);
};
printMyName("max");
printMyName2("max");
// ------------------------------

// short arrow functions
const multiply = (number) => {
    return number * 2;
};
const multiply2 = (number) => number * 2;
// ------------------------------

// classes
class Human {
    constructor() {
        this.gender = "male";
    }
    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = "max";
        this.gender = "female";
    }
    printMyName() {
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printGender();
// ------------------------------

// classes, properties and methods
class Human2 {
    gender = "male";
    printGender = () => {
        console.log(this.gender);
    };
}
class Person2 extends Human2 {
    name = "max";
    gender = "female";
    printMyName = () => {
        console.log(this.name);
    };
}
const person2 = new Person2();
person2.printMyName();
person2.printGender();
// ------------------------------

// spread and rest operators
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person3 = {
    name: "max",
};
const newPerson = {
    ...person3,
    age: 28,
};
console.log(newPerson);

const filter = (...args) => {
    return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
// ------------------------------

// destructuring
[num1, , num3] = numbers;
console.log(num1, num3);

const { name } = person3;
console.log(name);
// ------------------------------

// reference and primitive types refresher
const number = 1;
const num2 = number;
console.log(num2);

const person4 = { name: "max" };
const secondPerson = person4;
const secondPerson2 = { ...person4 };
person4.name = "manu";
console.log(secondPerson);
console.log(secondPerson2);
// ------------------------------

// array functions
const numbers2 = [1, 2, 3];
const doubleNumArray = numbers2.map((num) => {
    return num * 2;
});
console.log(doubleNumArray);
// ------------------------------
