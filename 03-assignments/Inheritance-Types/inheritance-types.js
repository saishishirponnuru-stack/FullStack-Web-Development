// Assignment 1: Inheritance Types in JavaScript

// 1. Single Inheritance

class Animal {
    eat() {
        console.log("Animal eats food");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

let dog = new Dog();

console.log("Single Inheritance:");
dog.eat();
dog.bark();


// 2. Multilevel Inheritance

class Grandfather {
    house() {
        console.log("Grandfather has a house");
    }
}

class Father extends Grandfather {
    car() {
        console.log("Father has a car");
    }
}

class Son extends Father {
    bike() {
        console.log("Son has a bike");
    }
}

let son = new Son();

console.log("\nMultilevel Inheritance:");
son.house();
son.car();
son.bike();


// 3. Hierarchical Inheritance

class Vehicle {
    start() {
        console.log("Vehicle starts");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}

let car = new Car();
let bike = new Bike();

console.log("\nHierarchical Inheritance:");
car.start();
car.drive();

bike.start();
bike.ride();


// 4. Multiple Inheritance using Object.assign()

let studentDetails = {
    study() {
        console.log("Student is studying");
    }
};

let sportsDetails = {
    play() {
        console.log("Student is playing");
    }
};

let student = {};

Object.assign(student, studentDetails, sportsDetails);

console.log("\nMultiple Inheritance:");
student.study();
student.play();