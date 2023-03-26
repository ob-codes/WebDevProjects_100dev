// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "CHRISTMAS"

favHoliday = "NEW YEAR";
console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let var1 = "its a string";
let var2 = "";

for(let i=var1.length-3;i<var1.length;i++){
  var2 += var1[i];
}
alert(var2);
alert(var1.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFrom100(n1,n2,n3,n4,n5){
  let result = n1 + n2 + n3 + n4 + n5;
  result = 100 - result;

  alert(Math.abs(result));
}
subFrom100(11,22,33,44,55);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function printHighestAndLowest(n1,n2,n3){
  let result = [];
  result.push(n1);
  result.push(n2);
  result.push(n3);

  result = result.sort();

  console.log(result[0], result[2]);
}
printHighestAndLowest(22, 77, 55);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
  if (Math.random() < 0.5)
    return "Heads";
  else
    return "Tails";
}
console.log(headsOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function checkHeadsOrTails(n1){
  for(let i=0;i < n1;i++)
    console.log(headsOrTails());
}
checkHeadsOrTails(10);