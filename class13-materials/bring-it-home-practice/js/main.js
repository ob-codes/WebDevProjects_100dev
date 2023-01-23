// *Variables*
// Create a variable and console log the value
let variable = 9;
console.log(variable);
// Create a variable, add 10 to it, and alert the value
variable += 10;
alert(variable);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function minusFour()
{
  variable -= 4;
  alert(variable);
}
minusFour();
// Create a function that divides one number by another and returns the remainder
function modulus(num1, num2)
{
  console.log("Remainder of division is: ", (num1 % num2));
}
modulus(17, 7);
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumTwo(num1, num2)
{
  let result = num1 + num2;
  if (result > 50) 
    alert("Jumanji");
}
sumTwo(45, 54);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(num1, num2, num3)
{
  let result = num1* num2* num3;
  if (result % 3 ==0)
    alert("ZEBRA");
}
multiplyThree(3, 5, 2);