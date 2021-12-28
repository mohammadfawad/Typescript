"use strict";
//Basic Data Types
let companyId = 5;
let companyName = "Oratech";
let isRegistered = true;
let companyAddress = "Software Technology Park, Islamabad.";
//Arrays
let companiesInformation = [companyId, companyName, isRegistered, companyAddress];
//Tuple
let companiesInformationTuple = [companyId, companyName, isRegistered, companyAddress];
//Tuple Array
let companiesInformationTupleArray = [
    [companyId, companyName, isRegistered, companyAddress],
    [companyId, companyName, isRegistered, companyAddress],
    [companyId, companyName, isRegistered, companyAddress]
];
console.log("companiesInformationTupleArray : ", companiesInformationTupleArray);
//Union
let productId = 22;
//Enum
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 0] = "up";
    Directions[Directions["down"] = 1] = "down";
    Directions[Directions["left"] = 2] = "left";
    Directions[Directions["right"] = 3] = "right";
})(Directions || (Directions = {}));
var DirectionPoint;
(function (DirectionPoint) {
    DirectionPoint["up"] = "upWard";
    DirectionPoint["down"] = "downWard";
    DirectionPoint["left"] = "leftSide";
    DirectionPoint["right"] = "rightSide";
})(DirectionPoint || (DirectionPoint = {}));
console.log("enum Directions : ", Directions);
console.log("enum DirectionPoint : ", DirectionPoint);
const user = {
    userId: 1,
    userName: 'fawad'
};
console.log("Object user ID : ", user.userId);
console.log("Object user Name : ", user.userName);
//Assertion or type casting
let cId = 1;
let customerId = cId; //or cId as number
//Functions
function addNum(x, y) {
    log(x);
    log(y);
    return x + y;
}
console.log("Function Output : ", addNum(5, 3));
//void
function log(message) {
    console.log("Consle Log Message : ", message);
}
const userInterface = {
    userId: 111,
    userName: 'Mustahsan'
};
console.log("Interface user ID : ", userInterface.userId);
console.log("Interface user Name : ", userInterface.userName);
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log("Interface Function Add(8,4): ", add(8, 4));
console.log("Interface Function Subtract(8,4): ", subtract(8, 4));
//Class
class Person {
    constructor(id, name) {
        this.personId = id;
        this.personName = name;
        //this.setPersonId(id)
        //this.setPersonName(name)
        console.log("Constructor values set : ", this.personId + " @ " + this.personName);
    }
    setPersonId(id) {
        this.personId = id;
    }
    setPersonName(name) {
        this.personName = name;
    }
    getPersonId() {
        return this.personId;
    }
    getPersonName() {
        return this.personName;
    }
    toStrings() {
        return "personId : " + this.personId + " personName : " + this.personName;
    }
}
const person = new Person(121, 'Hakeem Ajmal');
person.setPersonName('Hakeem Ajmal Khan');
console.log("Class Person.getPersonId and Person.getPersonName: ");
console.log("Person.getPersonId() : ", person.getPersonId());
console.log("Person.getPersonName() : ", person.getPersonName());
console.log("Person.toStrings() : ", person.toStrings());
//Employee subClass Extends Person Class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.employeePosition = position;
    }
    setEmployeePosition(position) {
        this.employeePosition = position;
    }
    getEmployeePosition() {
        return this.employeePosition;
    }
    toStrings() {
        return super.toStrings() + " EmployeePosition : " + this.getEmployeePosition();
    }
}
const employee = new Employee(35, 'Naheem Anwar Khan', 'Justice of Peshawer High Court');
employee.setPersonName('Naheem Anwar Khan @ Mansehra');
employee.setEmployeePosition('Justice of Peshawer High Court @ PAKISTAN');
console.log(employee.toStrings());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4, 5, 6]);
let stringArray = getArray(['Red', 'Orange', 'Green', 'Yellow', 'Blue', 'Black']);
stringArray.push('White');
numberArray.push(7);
console.log('Generic Number Array Elements : ');
numberArray.forEach(element => {
    console.log(element);
});
console.log('Generic String Array Elements : ');
stringArray.forEach(element => {
    console.log(element);
});
