// Type Basics
let age: number = 30;

// Objects & Arrays

//Arrays
let names: (string | number)[] = ["luigi", "mario", "yoshi", 5];

// Objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

// explicit types
let character: string;

character = "luigi";

// arrays
let ninjas: string[] = [];

ninjas.push("shaun");

// union types
let mixed: (string | number)[] = [];

// objects
let ninjaOne: object;

ninjaOne = { name: "yuji", age: 40 };

let ninjaTwo: {
  name: string;
  age: number;
  height: number;
};

ninjaTwo = { name: "Ebuka", age: 50, height: 70 };

// Dynamic (any) Types

// Better Workflow & tsconfig

// Function Basics (& void)

let greet = (name: string): void => {
  console.log("hello" + name);
};

greet("Dylan");

// Type Aliases

type DetailsType = number | string;
const greetDetails = (details: DetailsType) => {
  console.log(details);
};

// Function Types (signatures)

let number: (a: number, b: number) => void;

number = (age: number, date: number) => {
  // console.log(`${date} and ${age} are not the same `);
};

// Dom Interaction & Typecasting

const anchor = <HTMLAnchorElement>document.querySelector("a");

const form = document.querySelector(".form") as HTMLFormElement;

// Classes

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(a: string, b: string, c: number) {
    this.client = a;
    this.details = b;
    this.amount = c;
  }

  format() {
    return `${this.client}`;
  }
}

const invOne = new Invoice("mario", "freelancing", 500);

// Public, Private & Readonly

class Invoice2 {
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(a: string, b: string, c: number) {
    this.client = a;
    this.details = b;
    this.amount = c;
  }
}

const invTwo = new Invoice2("mario", "freelancing", 500);

// Modules
import { Invoice3 } from "./classes/invoice.js";

const invThree = new Invoice3("mario", "freelancing", 500);

// Interfaces

interface isPerson {
  name: string;
  age: number;
}

const me: isPerson = {
  name: "Dylan",
  age: 30,
};

const GreetPerson = (person: isPerson) => {
  console.log("hello ", person.name);
};

GreetPerson(me);

// Interfaces with Classes

import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;

// Generics
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docThree = addUID({ name: "Macmillian", age: 50 });

// Generics with Interface
interface Resources<T> {
  uid: string;
  resourcesName: string;
  data: T;
}

let ResorceOne: Resources<string> = {
  uid: "1",
  resourcesName: "people",
  data: "people",
};

// Enums

enum Type{
 BOOK,
 AUTHOR
}

Type.BOOK

// Tuples

let tup: [string, number, boolean] = ["mic", 24, true]
