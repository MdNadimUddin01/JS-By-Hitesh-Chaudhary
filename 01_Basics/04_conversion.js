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

let stringnumber = String(stringnumber);
console.log(stringnumber)
console.log(typeof stringnumber) // String




