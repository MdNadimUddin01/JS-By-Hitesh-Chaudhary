// kis tarah se data ko memory me store karte hai us base pe data ko do type me bata gaya hai
// 1. Primitive 2.Non Primitive


// Primtive :- Call By Value
// 7 Types : String , Number , Boolean , undefined , Symbol , BigInt

const value = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;
//let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id , anotherId]);

console.log(id === anotherId);
const bigNumber = 3456789345689n //BigInt


// Reference :- Non - Primitive

// Array , Objects , Functions

const heros = ["shaktiman" , "superman"]

let myObj = {
    name : "Nadim",
    age : 22,
}


const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);
console.log(typeof myFunction); // function Object

// Non-Primitive -> Object

// Js Dynamically Type Language

