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
console.log(calculateTotal(limit))
*/



// Destructuring
// used to unpack elements from an array and properties from objects into distnict variables
// ...rest creates array 
// leave empty space to not to store that element

/*
let arr= [3,4,5,6,7,8];
const [a, ,c,...rest]=arr;   // rest operator creats array of elements till end
console.log(a,c);            // it creates object if aplied on object. and rest must be last
console.log(rest);              


const student={
    id:69,
    fname:"prajwal",
    gpa:6.9
}
const {id,fname,gpa}=student;     // same variable name as of objects 
console.log(gpa);
*/



//SPREAD operator (...)
// The spread operator merges objects, and when duplicate keys exist, 
// the value from the rightmost object overwrites previous ones.

/*
const dbUser = {
    id: 55,
    name: "John Doe",
    role: "Admin",
    active: true
};

const updates = {
    active: false,
    name: "Johnathan Doe"
};

const updatedUser ={...dbUser, ...updates};
console.log(updatedUser);
*/



// ARRAY METHOD : .map()
// Use .map() when you want to transform every item in an array into something else.
// Input: An array of length N.
// Output: A new array of length N

/*
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 20 },
    { id: 3, name: "Keyboard", price: 50 }
];

const pNames = products.map(obj => obj.name );
*/



//ARRAY METHOD: .filter()
// Use .filter() when you want to select a subset of items based on a condition.
// Input: An array of length N.
// Output: A new array of length 0 to N (depending on how many pass the test).

/*
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 20 },
    { id: 3, name: "Keyboard", price: 50 }
];

const affordableProducts = products.filter(obj => obj.price<=100 )
*/



//arry method : .reduce()
// Use .reduce() when you want to boil an entire array down to a single value.

/*
const numbers = [10, 20, 30];
// accumulator: the running return value
// current: the item we are currently looking at
// 0: the starting value of the accumulator
const total = numbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
// Result: 60


const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 20 },
    { id: 3, name: "Keyboard", price: 50 }
];

const tprice= products.reduce((accumulator,current)=>{
    return accumulator+current.price;
},0)
*/