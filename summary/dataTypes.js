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
// console.table([id , anotherId]);

// console.log(id === anotherId);
const bigNumber = 3456789345689n //BigInt


// Reference :- Non - Primitive

// Array , Objects , Functions

const heros = ["shaktiman" , "superman"]

let myObj = {
    name : "Nadim",
    age : 22,
}


const myFunction = function(){
    // console.log("Hello World")
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction); // function Object

// Non-Primitive -> Object

// Js Dynamically Type Language

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "Nadim"
let anotherName = myName
myName = "Md"


// console.log(myName)  // "Md"
// console.log(anotherName) // "Nadim" -> copy pass hota hai


let userOne = {
    name : "Nadim",
    email : "a@gmail.com"
}

let userTwo = userOne //original value -> pass by refrence

userOne.name = "Md"

console.table([userOne , userTwo])// both have same output -> original value -> pass by refrence
