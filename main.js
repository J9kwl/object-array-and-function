"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let people = {
    friends: [],
};
let friend1 = {
    firstName: "javeria",
    lastName: "kanwal",
    id: 1
};
let friend2 = {
    firstName: "maira",
    lastName: "fatima",
    id: 2
};
let friend3 = {
    firstName: "laiba",
    lastName: "kamran",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
// Assignment 2
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 2);
scrambledArray.splice(3, 0, "student", "of");
console.log(scrambledArray.join(" "));
// Assignment 3
const inventory = [];
const product1 = {
    name: "civic",
    model: "2007",
    cost: 200000,
    quantity: 4,
};
const product2 = {
    name: "vezel",
    model: "2009",
    cost: 600000,
    quantity: 5,
};
const product3 = {
    name: "honda",
    model: "2009",
    cost: 1000000,
    quantity: 2,
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log(inventory[2].quantity); // accessing quantity of product3
console.log(inventory[1].cost); // accessing cost of product2
//CLASS LIST
let students = [
    {
        name: "Javeria",
        seniorStatus: false,
        completedAssignments: true,
    },
    {
        name: "Maira",
        seniorStatus: false,
        completedAssignments: false,
    },
    {
        name: "Maryam",
        seniorStatus: true,
        completedAssignments: true,
    },
    {
        name: "laiba",
        seniorStatus: true,
        completedAssignments: false,
    },
    {
        name: "Maham",
        seniorStatus: true,
        completedAssignments: false,
    },
];
console.log("THIS IS YOUR CLASS LIST", students);
//FINDING SENIOR STUDENT
let seniorStudent = function (students) {
    return students.filter(student => student.seniorStatus && student.completedAssignments);
};
const seniorstudents = seniorStudent(students);
seniorstudents.forEach(students => {
    console.log("CONGRATULATIONS YOU ARE A SENIOR STUDENT ", students);
});
//UPDATING STUDENT LIST
let updatingList = function (students) {
    return students.filter(students => students.completedAssignments);
};
students = updatingList(students);
console.log("THE UPDATED STUDENT LIST IS ", students);
// ALL ASSIGNMENTS ARE COMPLETED
