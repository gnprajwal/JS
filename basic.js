// const: The default choice. Use this for values that won't be reassigned (like requiring modules or defining constants).

// let: Use this only when the value needs to change later (like a counter in a loop).

// Arrow Functions (() => {}): A shorter syntax for functions. They are cleaner and handle the scope of this better than old functions.

// old code:
// var limit = 20;  
// var calculateTotal = function(price) {
//   return price + 5;
// };

//new code:
const limit=20;
const calculateTotal = (price)=>{
    return price+5;
}