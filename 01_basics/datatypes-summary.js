 // Primitive 
// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt.

//Javascript is dynamically types language.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 345673495459345735n

//Reference (Non Primitive)
// Array, Objects, functions

const heros = ["IronMan", "Captain America"];
let myObj = {
    name: "Aakash",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherId);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack & Heap

//Stack(Primitive) (In stack, you found a copy of the variable declared in it)
//Heap(Non-Primitive)(In Heap, you found a refrence of the declared variable)

let myYoutubename = "AakashSharmadotcom"

let anothername = myYoutubename
anothername = "Codingislove"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@paytm",
}

let userTwo = userOne

userTwo.email = "aakash@google.com"
console.log(userOne.email);
console.log(userTwo.email);