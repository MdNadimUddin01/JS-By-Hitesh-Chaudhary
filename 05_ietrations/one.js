//for loop

for(let index = 0; index <= 10 ; index++){
    
    // if(index == 5){
    //     console.log("5 is the best number")
    // }

    // console.log(index);

}

// console.log(index) //not accessible

for(let i = 1 ; i <= 10 ; i++){

    // console.log(`outer loop ${i}`)
    for(let j = 1 ; j <= 10 ; j++){
        // console.log(`inner loop value ${j} and inner loop ${i}`);  
     //   console.log(i + '*' + j + ' = ' + i*j)
    }

}

const myArray = ["flash" , "batman" , "superman"]
// console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

//keyWord -> break and continue

for (let index = 1; index <= 20; index++) {
    
    if(index == 5){
        // console.log("detected 5")
        break; //rok do ab
    } 

    // console.log(`value of i is ${i}`);   


}

for (let index = 1; index <= 20; index++) {
    
    if(index == 5){
        console.log("detected 5")
        continue; //ek baar maaf kar do 
    } 

    console.log(`value of i is ${i}`);   


}


