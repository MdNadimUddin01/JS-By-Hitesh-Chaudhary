const coding = ["js" , "ruby" , "java" , "python" , "cpp"]


// const values = coding.forEach((item) => { //doesnot return any value
//     return item;
// })

// console.log(values) // undefined

const myNums = [1 , 2 ,3 ,4 ,5, 6]

const values = myNums.filter((num) => { // array return karta hai
    return num > 4 //is condition pe jo true hoga wahi return karega
}) //callback function leta hai

// paranthesis lagane pe khud hi return kar deta hai
// curly braces me manually return karna padta hai

// console.log(values)

let newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

newNums = myNums.filter((num) => (
    num > 4
))

console.log(newNums)