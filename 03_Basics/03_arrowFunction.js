
const user = {

    userName : "Nadim",
    price: 999,
    welComeMessage : function(){
        console.log(`${this.userName} , welcome to website`)
        console.log(this)
    }

}

// user.welComeMessage();
// user.userName = "Sam"
// user.welComeMessage();

// console.log(this) //empty object beacuse we have no context but in browser windows is global object

// function chai(){
//     let userName = "Nadim"
//     console.log(this) // Undefined because it works only on Object
// }

// chai();

// const chai = function(){

//     let userName = "Nadim"
//     console.log(this) // Undefined because it works only on Object

// }

// chai()

const chai = () => {

    let userName = "Nadim"
    console.log(this) // undefined

}

// chai();

// const addTwo = (num1 , num2) => { // curly braces then write return
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2 // when paranthesis not Write to return

const addTwo = (num1 , num2) => ({userName:"Nadim"}) //use paranthesis when you want to return object

console.log(addTwo(2 , 3))

// const myArray = 

