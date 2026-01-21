// const: The default choice. Use this for values that won't be reassigned (like requiring modules or defining constants).

// let: Use this only when the value needs to change later (like a counter in a loop).

// Arrow Functions (() => {}): A shorter syntax for functions. They are cleaner and handle the scope of this better than old functions.

// old code:
/*var limit = 20;  
var calculateTotal = function(price) {
  return price + 5;
};*/

//new code:
/*
const limit=20;
const calculateTotal = (price)=>{
    return price+5;
}
*/




// Destructuring
// used to unpack elements from an array and properties from objects into distnict variables
// ...rest creates array 
// leave empty space to not to store that element

let arr= [3,4,5,6,7,8];
let[a, ,c,...rest]=arr;
console.log(a,c);
console.log(rest);


const student={
    id:69,
    fname:"prajwal",
    gpa:6.9
}
const{id,fname,gpa}=student;     // same variable name as of objects 
console.log(id);
