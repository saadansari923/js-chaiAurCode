// # Primitive

//7 types :String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 34567849520938423948n


// Refrence (Non primitive)

//Array, Objects, Functions


const heroes = ["ironman", "thor", "loki"];
let myObj = {
    name: "saad",
    age: 19,
}

const myFunction = function (){
    console.log("Hello World");
    
}

console.log(typeof heroes);

