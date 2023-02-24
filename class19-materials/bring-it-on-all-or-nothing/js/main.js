// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let isBool = true;
alert(isBool);

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "purple";
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sumAndDivide(n1, n2, n3, n4){
  return (n1+n2+n3)/n4;
}
console.log(sumAndDivide(10, 12, 14, 10));
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function raiseToPower(n1, n2){
  let result = 1;
  
  if (n2 === 0)
    return 1;
  for (let i=1; i <= n2; i++){
    result *= n1;
  }
    
  return result;
}
console.log(raiseToPower(2,3));

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function takeInput(b1, word){
  if (b1)
    alert(word);
  else
    console.log(word);
}
takeInput(false, "Hi");
takeInput(true, "Hi");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function printFizzBuzzLogic(n1){
  for(let i=1; i<= n1; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
      console.log("fizzbuzz");
    }
    else if(i % 3 ===0){
      console.log("fizz");
    }
    else if(i % 5 === 0){
      console.log("buzz");
    }
    else
      console.log(i);
  }
}
printFizzBuzzLogic(17);