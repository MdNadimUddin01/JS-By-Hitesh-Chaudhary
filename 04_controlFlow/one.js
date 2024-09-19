// if

if(true){ // true for execution

}
if(false){ // not execute -> false

}

const isUSerLoggedin = true

if(isUSerLoggedin){
    // code
}

// > , < , <= , >= , == , !=
// === -> also check the type

if(2 == "2"){ //data type check nhi karta hai
    console.log("executed")
}

if(2 === "2"){ //data type bhi check karta hai
    console.log("Not Executed")
}

// const temp = 41

// if(temp < 50){
//     console.log("temprature is less than 50");
// }else{
//     console.log("Temprature is greater than 50")
// }

// shortHand Notation
const balance = 1000;

// if(balance > 1000) console.log("test1"); // one line

// if(balance > 1000) console.log("try"),
// console.log("test2"); // Bad Practice

// balance > 1000 ? (console.log(`balance is greater than 1000`)) : (conso)

// if(balance < 500){
//     console.log("balance is less than 500");
// }else if(balance < 750){
//     console.log("balance is less than 750");
// }elseif(balance < 900){
//     console.log("balance is 900")
// }

const userLoggedin = true
const debitCard = true

if(userLoggedin && debitCard){
    console.log("Allow to buy course");
}

const loggedInfromGoogle = true;
const loggedInfromEmail = true

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("user Logged in");
}

