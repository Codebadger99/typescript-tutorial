"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 30;
let names = ["luigi", "mario", "yoshi", 5];
let ninja = {
    name: "mario",
    belt: "black",
    age: 30,
};
let character;
character = "luigi";
let ninjas = [];
ninjas.push("shaun");
let mixed = [];
let ninjaOne;
ninjaOne = { name: "yuji", age: 40 };
let ninjaTwo;
ninjaTwo = { name: "Ebuka", age: 50, height: 70 };
let greet = (name) => {
    console.log("hello" + name);
};
greet("Dylan");
const greetDetails = (details) => {
    console.log(details);
};
let number;
number = (age, date) => {
};
const anchor = document.querySelector("a");
const form = document.querySelector(".form");
class Invoice {
    constructor(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
    format() {
        return `${this.client}`;
    }
}
const invOne = new Invoice("mario", "freelancing", 500);
class Invoice2 {
    constructor(a, b, c) {
        this.client = a;
        this.details = b;
        this.amount = c;
    }
}
const invTwo = new Invoice2("mario", "freelancing", 500);
const invoice_js_1 = require("./classes/invoice.js");
const invThree = new invoice_js_1.Invoice3("mario", "freelancing", 500);
const me = {
    name: "Dylan",
    age: 30,
};
const GreetPerson = (person) => {
    console.log("hello ", person.name);
};
GreetPerson(me);
let docOne;
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: "Macmillian", age: 50 });
let ResorceOne = {
    uid: "1",
    resourcesName: "people",
    data: "people",
};
var Type;
(function (Type) {
    Type[Type["BOOK"] = 0] = "BOOK";
    Type[Type["AUTHOR"] = 1] = "AUTHOR";
})(Type || (Type = {}));
Type.BOOK;
let tup = ["mic", 24, true];
//# sourceMappingURL=index.js.map