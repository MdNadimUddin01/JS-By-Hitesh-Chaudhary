const coding = ["js" , "java" , "python" , "cpp"]

// callback function
//isme function ka naam nhi hota hai

coding.forEach( function (item){
    // console.log(item) //js ruby ...
})

coding.forEach((item) => {
    console.log(item)
})


function printMe(item){
    console.log(item)
}

coding.forEach(printMe) // function ka refrence dena hai na ki function call karna hai

coding.forEach((item , index , array) => { // array = coding
    console.log(item , index , array)
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageFile : "Js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
    {
        languageName : "c++",
        languageFile : "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFile + "  " + item.languageName);
})

// array -> for of(value) , for in(index) , for each (item , index , whole array)
// object -> for in(key)
// map -> for of(key)[destructring] , for each
// array of object -> for each(more functionality) , for of(one functionality)


// object -> for of se nahi
// map -> for in se nhi
// for each -> sab pe laga do

