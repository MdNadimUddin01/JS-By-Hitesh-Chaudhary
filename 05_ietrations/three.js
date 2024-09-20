// for of
let arr = ["1" , "2" , "3" , "4"]

// for (const element of object) { //object -> kis pe loop lagana hai
    
// }

for(const num of arr){
    // console.log(num)
}

const greetingWords = "Hello World!"

for(const greet of greetingWords){
    // console.log(`Each Char is ${greet}`)
}

//Maps

// object -> hold key value pair
// order ko yaad rakhta hai
// no duplicate value

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

// console.log(map)

for(const key of map){
    // console.log(key) // araay me print kar dega
}

for(const [key , value] of map){
    // console.log(key , '-' , value);
}

const myObject = {
    "game1" : "NFS",
    "game2" : "BGMI"
}

// for(const [key , value] of myObject){ // not ietratable
//     console.log(key , value);
// }

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

for(const value of myCoding){
    // console.log(value.languageFile)
}

