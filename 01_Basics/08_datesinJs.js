//Dates

let myDate = new Date();

console.log(typeof myDate)
// console.log(myDate);  // 2024-09-17T09:02:28.617Z
// console.log(myDate.toString()); //Tue Sep 17 2024 14:32:28 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) //2024-09-17T09:02:28.617Z
// console.log(myDate.toJSON()) //2024-09-17T09:02:28.617Z
// console.log(myDate.toLocaleDateString())  //17/9/2024
// console.log(myDate.toLocaleTimeString()) //2:33:27 pm
// console.log(myDate.toDateString());


// const myCreatedDate = new Date(2024 , 8 , 17) // month 0 se start karte hai
// console.log(myCreatedDate.toLocaleDateString)

// const myCreatedDate = new Date(2024 , 8 , 17 ,5 , 3)
// console.log(myCreatedDate.toLocaleDateString)

// const myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleDateString)

// const myCreatedDate = new Date("01-09-2024")
// console.log(myCreatedDate.toLocaleDateString)

// const myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getMonth)

newDate.toLocaleString('default' , {
    weekday:"long",
})