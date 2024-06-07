// #Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 4895048594836986986909n;

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["Iron-man", "Spider-man", "Thor"];
let myObj = {
  name: "nisarg",
  age: 26,
};

const myFun = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// (Stack (Primitive), Heap (Non-Primitive)) Memory

let myYoutubename = "PokeAxel"

let anotherName = myYoutubename
anotherName = "CodeAxel"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "nisarg@google.com"

console.log(userOne.email);
console.log(userTwo.email);