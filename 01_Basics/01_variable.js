const accountId = 144553  //value Lock or Not Change
let accountEmail = "nadim@google.com" //
var accountPassword = "12345"
accountCity = "Bihar" //Bad Practice
let accountState;
// accountId = 2  //not possible
accountEmail = "mnu@gmail.com"
accountPassword = "212121"
accountCity = "UP"

console.table([accountId , accountEmail , accountPassword , accountCity])

/*
    Prefer Not To Use To var because of issue in block scope and functional scope
*/

console.log(accountState); //Undefined Value

