// console.log("N")
// console.log("A")
// console.log("D")
// console.log("I")
// console.log("M")

function sayMyName(){
    console.log("N")
    console.log("A")
    console.log("D")
    console.log("I")
    console.log("M")
}

sayMyName();

function addTwoNumbers(number1 , number2){ //parameters
    console.log("Nadim");
    return number1 + number2;
    console.log("Nadim") // not reachable
}

addTwoNumbers(2 , 3) //arguments

function loginUserMessage(userName = "sam"){
    
    if(!userName){
        console.log("Please Enter a UserName")
        return
    }
    
    return `${userName} just logged in`
}

console.log(loginUserMessage("Nadim"))

// function calculateCartPrice(...num1){

//     return num1

// }
function calculateCartPrice(val1 , val2 ,...num1){

    return num1

}

console.log(calculateCartPrice(2 , 3 , 4, 5));

const user = {
    userName : "Nadim",
    price: 999
}

function handleObject(anyobject){

    console.log(`User name is ${anyobject.userName} and Price is ${anyobject.price}`)

}

// handleObject(user);

handleObject({
    userName : "Sam" , price:399
})

const array = [10 , 20 ,30 , 40 , 60]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(array))
console.log(returnSecondValue([100,200,300]))

