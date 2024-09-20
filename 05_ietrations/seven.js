const number = [1 , 2, 3 , 4, 5, 6 , 7, 8,9 ,10]

const newNumbers = number.map((num) => {
    return num + 10
})

// console.log(newNumbers);

const newNums = number.map((num) => {
    return num*10
}).map((num) => num + 1)
.filter((num) => {
    return num >= 40
})

// console.log(newNums);

//reduce method -> take callback function
// prototype
// (accumulator , currentValue) 
// accumulator = initial value
// currentValue -> array ka current value

const myNums = [1 , 2 , 3 , 4]

// const total = myNums.reduce((num , value) => {
//     console.log(`acc : ${num} and currVal : ${value}`)
//     return num + value;
// },0);

// const total = myNums.reduce(function(num , value) {
//     return num + value
// }, 0)

const total = myNums.reduce((num , val) => num + val , 0)
console.log(total)

const shoppingCart = [
    {
        itemName : "Js Course",
        price: 2999
    },
    {
        itemName : "Python",
        price: 999
    },
    {
        itemName : "Mobile dev Course",
        price: 5999
    },
    {
        itemName : "Data Science",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc , currValue) => acc + currValue.price , 0);
console.log(totalPrice);