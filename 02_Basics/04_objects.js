const tinderUser = new Object() // single ton object
// const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "@gmail.com",
    fullName : {
        userFullName :{
            firstName : "Md",
            lastName : "Nadim"
        }
    }
}

// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName?.firstName)


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}

// const obj3 = {obj1 , obj2} // array wala problem object ke andar object create
const obj3 = Object.assign(obj1 , obj2)

const obj4 = Object.assign({} , obj1 , obj2) // best practice
// console.log(obj3)


const obj = {
    1 : 'd',
    2 : "c"
}
const obj5 = { ...obj1,...obj  , ...obj2}

// console.log(obj5) // { '1': 'd', '2': 'c', '3': 'a', '4': 'b' } -> why not { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } it overrides the value value after spreading obj1

const user = [

    {
        id:1,
        email:"m@gmail.com",
    },

    {
        id:2,
        email:"n@gmail.com",
    },

    {
        id:3,
        email:"u@gmail.com",
    }

]

// console.log(user[0].email)

// console.log(Object.keys(tinderUser)) // return an array of key
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) //return ar array of [key , value]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // return boolean result


// object destructuring

const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor : "Nadim" 
}

const {courseInstructor : instructor} = course // object destructering
console.log(instructor)

// API Result

// {
//     "name" : "Nadim",
//     "courseName" : "Js in Hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]