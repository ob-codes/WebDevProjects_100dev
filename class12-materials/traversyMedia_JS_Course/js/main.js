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


/*
//String, numbers, boolean, null, undefined, symbol
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


/*
//String property & methods
const s ='Hello World';

console.log(s.length); //property does have (), method has ()
console.log(s.toUpperCase()); //method
console.log(s.toLowerCase()); //method
console.log(s.substring(0, 4)); //method
console.log(s.substring(0, 5).toUpperCase()); //combination of two methods
console.log(s.split('r')); //used for tokenization of the input string
*/

/*
//Arrays
const number = new Array(1,2,3,4,5); //declared using constructor
const fruits = ['apple','banana','pears', 'tomato', 75, true]; //mix datatypes are allowed
fruits[3] = 'grapes';

fruits.pop();
fruits.push('mango');
fruits.shift();
fruits.unshift('apricot');

console.log(number);
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray(1));

console.log(fruits.indexOf('mango'));
*/

/*
//Objects
const person = {
  firstName : 'John',
  lastName : 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address:{
    street: '50 main st',
    city: 'Boston',
    state:'MA'
  }
}

console.log(person.firstName, person.lastName);
console.log(person.address);
console.log(person.hobbies[1]);
//alert(person.address.city); //shows pop up on webpage

const {firstName, lastName, address: {city} } = person; 
console.log(firstName, lastName, city);

person.email = 'john@email.com'; 
console.log(person);
*/

/*
//Arrays of Objects
const array1 = [
  {
    id : 1,
    name : 'first',
    age : 23
  },
  {
    id : 2,
    name : 'second',
    age : 28,
    address: {
      street: 'Main st', 
      city : 'Boston', 
      state : 'MA'
    }
  }
];
console.log(array1[0].name);
console.log(array1[1].address);

//JSON strings
const array1JSON = JSON.stringify(array1);
console.log(array1JSON);
*/

/*
//For loop
for(let i=0;i<3;i++)
{
  console.log(`The for loop counter is ${i}`);
}

//while loop
let i=0;
while(i<3)
{
  console.log(`The while loop counter is ${i}`);
  i++;
}
*/

/*
//iterate using loops
const array1 = [
  {
    id : 1,
    name : 'first',
    age : 23
  },
  {
    id : 2,
    name : 'second',
    age : 28,
    address: {
      street: 'Main st', 
      city : 'Boston', 
      state : 'MA'
    }
  },
  {
    id : 3,
    name : 'second',
    age : 28,
    address: {
      street: 'Main st', 
      city : 'Boston', 
      state : 'MA'
    }
  }
];

for (let i=0; i < array1.length; i++)
{
  console.log(array1[i].id);
}

for (let x of array1)
{
  console.log(x.id);
}
*/

/*
//high order array method: forEach
const array1 = [
  {
    id : 1,
    name : 'first',
    age : 23,
    isCompleted: true
  },
  {
    id : 2,
    name : 'second',
    age : 28,
    address: {
      street: 'Main st', 
      city : 'Boston', 
      state : 'MA'
    },
    isCompleted: false
  },
  {
    id : 3,
    name : 'second',
    age : 28,
    address: {
      street: 'Main st', 
      city : 'Boston', 
      state : 'MA'
    },
    isCompleted: true
  }
];

array1.forEach(function(arr){
  console.log(arr.id);
});

//map
const arrayAge = array1.map(function(arr3){
  return arr3.age;
});
console.log(arrayAge);

//filter
const arrCompleted = array1.filter(function(arr4){
  return arr4.isCompleted === true;
});
console.log(arrCompleted);

//filter + map
const arrCompleted2 = array1.filter(function(arr4){
  return arr4.isCompleted === true;
}).map(function(arr4) {
  return arr4.id;
});
console.log(arrCompleted2);
*/

/*
//if-else
const x = 4;
const y=10;

if (x==10) //only matches value
{
  console.log('x is 10');
}
if (x==='10') //matches both value and type
{
  console.log('x is 10');
}
else
  console.log("x is not '10'");
*/

/*
//ternary operator
const x = 10;
const color = x > 9 ? 'black' : 'blue';

//switch-case
switch(color)
{
  case 'blue': 
    console.log('color is blue');
    break;
  case 'red':
    console.log('color is red');
    break;
  default:
    console.log('color is NOT red NEITHER blue');
    break;
}
*/

//function
/*
function addNums(num1 = 0, num2 = 0){
  return num1 + num2;
}
console.log(addNums(1, 3));

1- replace function keyword with const 
2- put = sign after func name
3- put arrow operator after parameters
4- { } optional for single statement 
5- () optional when only one input paramter
6- return statement is not required when {} not used

const addNums = (num1 = 0, num2 = 0) => num1 + num2;
*/

/*
//Constructor
function Person (firstName, lastName, dob) {
  this.firstName = firstName; 
  this.lastName = lastName; 
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  this.getFullName = function() {
    //return this.firstName + this.lastName ;
    return `${this.firstName} ${this.lastName}`;
  }
}

//initiate object
person1 = new Person('John' , 'Doe', '11-21-1996');
person2 = new Person('Marry' , 'Doe', '11-30-1992');
console.log(person1);
console.log(person1.getFullName());
console.log(person2.getBirthYear());
*/

//Constructor prototype
function Person (firstName, lastName, dob) {
  this.firstName = firstName; 
  this.lastName = lastName; 
  this.dob = new Date(dob);  
}
//prototype hides the function details 
Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
  //return this.firstName + this.lastName ;
  return `${this.firstName} ${this.lastName}`;
}
person1 = new Person('John' , 'Doe', '11-21-1996');
console.log(person1);