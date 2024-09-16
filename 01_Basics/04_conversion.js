let score = "33"

console.log(typeof(score)) //method 
console.log(typeof score)

let valueInNumber = Number(score) // conversion
console.log(typeof valueInNumber) //number

score = "33abc"
valueInNumber = Number(score) // conversion
console.log(typeof valueInNumber) //number
console.log(valueInNumber) // NAN (Not A Number)

//null -> Number(null) -> 0

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

isLoggedIn = "sanj"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

//  1 => true 
//  0 => false
//  "hitesh" => true
//  "" => false

let someNumber = 33

let stringnumber = String(someNumber);
console.log(stringnumber)
console.log(typeof stringnumber) // String


// *************************** Operations *************************************//

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)

let str1 = "hello"
let str2 = " Nadim"

let str3 = str1 + str2;

console.log(1 + "2") // 12
console.log("1" + 2) //12
console.log("1" + 2 + 2) // 122
console.log(2 + 2 + "2") // 42


console.log(true)  //true
console.log(+true) // 1

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2 // bad practice

let gameCounter = 100
gameCounter++
console.log(gameCounter);

// HA - 
// type conversion from doc
//  prefix and postfix from MDN


