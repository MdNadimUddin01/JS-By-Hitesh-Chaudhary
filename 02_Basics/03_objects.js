//singleton -> koi bhi constructor se create kiya gaya object
// Object.create() -> contructor

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Nadim",
    // "full Name" : "Md Nadim Uddin", -> isko .(dot) se access nahi kar skate hai
    age:19,
    // mySym : "mykey1",  // cannot create with that
    [mySym] : "myKey1", // interview question
    location:"Aligarh",
    email: "@google.com",
    isLoggedin : false,
    lastLoginDays: ["Monday" , "Saturday"]
}


// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym]) //not access with the help of .(dot)

// jsUser.email = "@gmail.com" //value update
// Object.freeze(jsUser) // freeze the object

// console.log(jsUser)
// jsUser.email = "@google.com"
// console.log(jsUser) //not update email because we freeze the object

jsUser.greeting = function(){
    console.log("Hello Js user")
}

console.log(jsUser.greeting) // function ka refrence ata hai
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`Hello Js USer ${this.name}`)
}

console.log(jsUser.greetingTwo())


