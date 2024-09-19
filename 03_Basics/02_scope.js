// let a = 10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)
// var c = 400
let a = 100
if(true){
    let a = 10
    // const b = 20
    // var c = 30

    // console.log("INNER : " , a)
}

// console.log(a)
// console.log(b)
// console.log(c) // 30



function one(){

    const userName = "Nadim"

    function two(){
        const website = "youtube"
        console.log(userName)
    }

    // console.log(website)

    two()

}

// one()

if(true){

    const userName = "Nadim"

    if(userName === "Nadim"){

        const website = "youtube"
        // console.log(userName + website)

    }
    // console.log(website)

}

// console.log(userName)

// ********************* INTERESTING ***************************

function addone(num){

    return num + 1
}

addone(5)

// addTwo(5) give Error // Defination below hai

const addTwo = function(num){ //expression
    return num + 2
}


