const marvelHeros = ["thor" , "ironman" , "spiderman"]

const dcHeros = ["superman" , "flash" , "batman"]

// marvelHeros.push(dcHeros) //array ko as a data leta hai
// console.log(marvelHeros[3])

// const allHeros = marvelHeros.concat(dcHeros) //concat ke array ko return karta hai aur marvelHeros array pe koi effect nhi hota hai 
// console.log(allHeros)

// const allNewHeros = [...marvelHeros , ...dcHeros] //spread opearctor use to seprate the array value
// console.log(allNewHeros)

// const anotherArray = [1 , 2 ,3 ,4 , [4 ,5 ,6] , [6 , 7 , [4 , 5]]]

// const realAnotherArray = anotherArray.flat(Infinity) // convert the signle array

console.log(Array.isArray("Nadim"))
console.log(Array.from("Nadim"))
console.log(Array.from({name : "Nadim"}))  //intresting -> return an empty array it cannot create the array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))
