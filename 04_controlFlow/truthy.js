const userEmail = "@gmail.com"
// const userEmail = "" //give false value
const arr = [] //give true value
if(userEmail){
    console.log("Got User Email")
}else{
    console.log("Don't have user email")
}

//  flasy  value
// false, 0 , -0 , BigInt 0n , "" , null ,undefined , NaN

// truthy Value
//  "0"(string) , "false"(string) , " "(string) , [] , {} , function(){} , 

if(arr.length === 0){
    console.log("Empty array");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Empty Object");
}

// false == 0 -> true
// false == "" -> true
// 0 == "" -> true

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 //10 //agar nul ho to agge check karo agar value hai to value assign kardo
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 15 // 10

//Terniary Opeartor

// condition ? true : false

const price = 100

price > 100 ? console.log("greater than 100") : console.log("less than 100");






console.log(val1);
