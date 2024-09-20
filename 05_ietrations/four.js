const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

let arr = [10,20,30,40]

for(const element in arr){ //array ki key means index
    console.log(arr[element]);
}


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

for(const key in map){ //not work because map is not ietratable
    // console.log(key)
}


// object -> for in
//array -> for of , for in
// map -> for of
