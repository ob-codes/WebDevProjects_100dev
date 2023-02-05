// *Variables*
// Create a variable and console log the value
// let var1 = 9;
// console.log(var1);
// Create a variable, add 10 to it, and alert the value
// let var2 = 10;
// var2 +=10;
// alert(var2);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
// function subtract(num1, num2, num3, num4){
//   alert(num1 - num2 - num3 - num4);
// }
// subtract(22, 10, 8, 4);
// Create a function that divides one number by another and returns the remainder
// function remainder(num1, num2){
//   return num1 % num2;
// }
// alert(remainder(4, 2));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
// function sum50(num1, num2){
//   if ((num1 + num2) > 50) {
//     alert("Jumanji");
//   }
// }
// sum50(14, 43);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
// function productThree(num1, num2, num3) {
//   if ((num1 * num2 * num3) % 3 == 0) {
//     alert("Zebra");
//   }
// }
// productThree(1,1,3);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takeInput(num1, word1){
  for (let i=0; i < num1; i++){
    console.log(word1);
  }
}
takeInput(4, "hi");