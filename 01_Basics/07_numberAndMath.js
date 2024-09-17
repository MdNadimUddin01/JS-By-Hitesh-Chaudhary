const score = 400

const balance = new Number(100)
// console.log(balance)


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log()

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)) //23.9
const anotherNumber = 123.8966
// console.log(anotherNumber.toPrecision(3)) //124

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')) // give comma according to number precision

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)


// ***************** Maths *********************

// console.log(Math);
// console.log(Math.abs(-1)) // 1
// console.log(Math.abs(1)) // 1
// console.log(Math.round(4.6)) // 5
// console.log(Math.round(4.3)) // 4
// console.log(Math.floor(4.2)) // 4
// console.log(Math.ceil(4.2)) // 5

console.log(Math.random().toFixed(2)) // between 0 and 1
const val = Math.random().toFixed(2);
console.log(val)
console.log(Math.floor((val*10) + 1))


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



