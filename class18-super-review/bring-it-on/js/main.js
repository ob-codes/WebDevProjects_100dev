// *Variables*
// Create a variable and console log the value
let num1 = 10;
console.log(num1);
// Create a variable, add 10 to it, and alert the value
let num2 = 23;
num2 += 10;

alert(num2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(num1, num2, num3, num4){
  alert (num1 - num2 - num3 - num4);
}

subtractFour(10, 4, 2, 1);

// Create a function that divides one number by another and returns the remainder
function divide(num1, num2){
  return num1 % num2;
}

console.log(divide(10, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function complex(num1, num2){
  if((num1 + num2) > 50)
    alert("Jumanji");
}

complex(43, 8);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(num1, num2, num3){
  if(((num1* num2* num3) % 3) == 0){
    alert("Zebra");
  }
}

multiply(27, 9, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopXYTimes(x, y){
  y = Number(y);

  for(let i =0; i < y; i++){
    console.log(x);
  }
}

loopXYTimes("Hi", 3)