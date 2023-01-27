// *Variables*
// Create a variable and console log the value
let myVariable = 9;

console.log(myVariable);

// Create a variable, add 10 to it, and alert the value
myVariable += 10;
alert(myVariable);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(num){
  alert(num - 4);
}
subFour(145);

// Create a function that divides one number by another and returns the remainder
function modulus(num1, num2){
  return num1 % num2;
}
console.log(modulus(14, 5));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addNums(num1, num2){
  let sum = num1 + num2;
  if (sum > 50) 
    alert("Jumanji");
}
addNums(34, 17);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function productThree(num1, num2, num3){
  let product = num1* num2* num3;
  if ((product % 3) == 0)
    alert("ZEBRA");

}

productThree(1,1,3);