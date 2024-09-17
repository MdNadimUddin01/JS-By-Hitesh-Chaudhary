const name = "Nadimm"
const repoCount = 50
// console.log(name + repoCount + " Value") // Old Version

// backtick
console.log(`Hello my name is ${name}`)

const gameName = new String('nadim - 01');
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1));
console.log(gameName);
console.log(gameName.indexOf('m'))

const newString = gameName.substring(1 , 1) //startindex -> lastindex
// -ve index ko ignore kar ke 0 se start kar deta hai
console.log(newString)

const anotherString = gameName.slice(-8 , 4)
// -ve index ko right se start karta hai
console.log(anotherString)

const newStringOne = "    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim());
// trimStart or trimEnd

const url = "https://nadim.com/nadim%20uddin"
console.log(url)
const replacedUrl = url.replace('%20' , ' ');
console.log(replacedUrl);

console.log(url.includes("nadim"))
 