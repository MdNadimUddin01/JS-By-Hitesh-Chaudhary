// Immediately Invoked Function Expressoins (IIFE)
// 
(function chai(){
    console.log(`Db Connected`)
})(); //now it will run

//IIFE : - jo function directly execute ho jaaye, global scope se pollution se problem ko dur karne ke liye
//iiefi ko end karna padta hai so use semi colon
// (
//     function chai(){
        //named IEEFI
//         console.log(`Db Connected two`)
//     }
// )()

(
    (name) => {
        //Unnamed IEEFI
        console.log(`Db Connected again ${name}`);
    }
)("Nadim"); // as a function dekhna hai
