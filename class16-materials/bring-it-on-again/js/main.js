// *Variables*
// Declare a variable, assign it a value, and alert the value
// let var1 = 9;
// alert(var1);
// Create a variable, divide it by 10, and console log the value
// let var2 = 31;
// console.log(var2 / 10);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
// function product(num1, num2, num3){
//   alert(num1* num2* num3);
// }
// product(1, 2 ,3);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function maths(n1, n2, n3, n4){
//   console.log((n1 + n2) -n3 -n4);
// }
// maths(4,3,2,1);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function takeThree(n1, n2, n3){
//   if(((100 + n1 - n2) / n3) > 25){
//     console.log("WE HAVE A WINNNA");
//   }
// }
// takeThree(100, 5, 5);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function takeDay(day){
//   day = day.toLowerCase();
//   if (day == "saturday" || day == "sunday"){
//     alert("its weekend");
//   }
//   else if (day == "monday" || day == "tuesday" ||
//           day == "wednesday" || day == "thursday" || day == "friday"){
//     alert("its week day");
//   }
//   else {
//     alert("try again");
//   }
// }
// takeDay("tuesday");
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function counter(n1){
  for(let i=1; i <= n1; i++){
    if ((i%3) == 0){
      console.log(i);
    }
  }
}
counter(30);