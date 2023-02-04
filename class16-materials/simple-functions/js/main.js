//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(num1, num2){
  alert(num1 - num2);
}
// subtract(12, 2);
//create a function that divides three numbers and console logs the quotient
function qoutient(num1, num2, num3){
  console.log(num1 / num2 / num3);
}
qoutient(32, 4, 2);
//create a function that multiplys three numbers and returns the product
function multiply(num1, num2, num3){
  return num1 * num2 * num3;
}
multiply(2,3,4);
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function complex(x, y, z){
  return (x + y) % z;
}
console.log(complex(3, 3, 2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function complex2(num1, num2, num3, num4){
  let prod = num1 * num2;
  if (prod > 100) {
    console.log(prod + num3 + num4);
  }
  else if (prod < 100) {
    console.log(prod - num3 - num4);
  }
  else {
    alert((num1 * num2 * num3) % num4);
  }
}
complex2(10, 11, 9, 7);
complex2(2, 2, 9, 7);