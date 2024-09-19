
// 1. Global Exection Context -> browser me this -> windwow object

// js is a single thread language

// 2. Function ecxecution context

// 3. Eval Execution context

// {} -> memory creation phase -> variable aur sab ka memory allocate hota hai
//  -> exection phase

let val1 = 10
let val2 = 5 

function addNum(num1 , num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val , val2)
let result2 = addNum(2 , 3)

// iska kaam hone ke badd ye delete bhi ho jata hai
// 1. Global execution
// 2. Memory Phase (1st cycle)
    // saare variable ka naam liya jaata hai aur uske andar undefined rakha jaata hai
    // function me fnuction ka defination jata hai

// 3. Execution Phase (2nd cycle)
    // Memory Phase---- Execution Context
    // val1 <- undefined <- 10
    // val2 <- undefined <- 5
    // total <- undefined <-  15
    // total fir global execution context me jaayenga
    
    // addNum -> jitna baar function likha uthna baar memory fetch and execution hoga
    
    