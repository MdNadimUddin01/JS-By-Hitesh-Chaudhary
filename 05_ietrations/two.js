
let index = 0;

while(index <= 10){
    console.log(`value of index is ${index}`)
    index += 2;
}

let myArray = ["flash" , "batman" , "superman"]
let arr = 0

while(arr < myArray.length){
    console.log(`value of index at ${myArray[arr]}`)
}

index = 0;

do { // atleast 1 time run means pahle kaam kar lo last me check karega sahi hai ya nhi
    console.log(`value of index is ${index}`)
    index += 2;
} while (index <= 10);

let score = 11

do {
    
    console.log(score)
    score++;

} while (score <= 10);