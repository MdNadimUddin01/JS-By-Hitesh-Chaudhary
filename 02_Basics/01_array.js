//array
//resizeable
//mix no data type
// array are shallow copy

//shallow copy -> share same refrence
//deep copy -> doesnot share the same refrence

const myArr = [0,1,2,3,4,5]
const myarr1 = ["shaktiman" , "spiderman"]
const myArr2 = new Array(1,2,3,4,5)


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0) //insret an element at first index
// myArr.shift() //delete an element from first

// console.log(myArr.includes(9)) //return a boolean data type
// console.log(myArr.indexOf(9)) // return -1 which means it is not available


const newArr = myArr.join()

// console.log(newArr) // string
// console.log(myArr)

//Slice , Splice

console.log("A " , myArr)
const myn1 = myArr.slice(3,6) //range ko include nhi karta hai original array pe no effect
console.log(myn1)
console.log("B " , myArr)

const mynew2 = myArr.splice(1 ,3) //original array ko bhi effect karta hai aur range ko include karta hai
console.log(mynew2)
console.log("C " , myArr)

