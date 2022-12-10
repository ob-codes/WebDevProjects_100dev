/* variables */

//var -> global scope , not recommended
//let -> can be reassigned
//const -> cannot be reassigned
/*
// example
const age1 = 30;
console.log(age1);

let age2 = 30;
age2 = 34;
console.log(age2);
*/

//String, numbers, boolean, null, undefined, symbol
/*
const name1 = 'john';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // z= undefined on default

console.log(name1);
console.log(typeof(name1));
console.log(typeof(rating));
console.log(typeof(isCool));
console.log(typeof(x)); //return type as object -> bogus value //problem in js
console.log(typeof(y));
console.log(typeof(z));
*/
/*
//String operation
const name1 = 'john';
const age = 30;
//String concat
console.log('My name is ' + name1 + ' and I am ' + age); //difficult in long string 

//template string
console.log(`My name is ${name1} and I am ${age}`);
*/

//String property & methods
const s ='Hello World';

console.log(s.length); //property does have (), method has ()
console.log(s.toUpperCase()); //method
console.log(s.toLowerCase()); //method
console.log(s.substring(0, 4)); //method
console.log(s.substring(0, 5).toUpperCase()); //combination of two methods
console.log(s.split('r')); //used for tokenization of the input string