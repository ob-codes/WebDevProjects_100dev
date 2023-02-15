//--- Easy
//create a variable and assign it a number
let num1 = 59;
//minus 10 from that number
num1 -=10;
//print that number to the console
console.log(num1);
//--- Medium
//create a variable that holds a value from the input
document.querySelector("h1").addEventListener("click", run);
let input;
function run(){
  input = Number(document.querySelector("#danceDanceRevolution").value);
  //add 25 to that number
  input += 25;
  //alert that number
  alert(input);
}
//--- Hard
//create a variable that holds the h1
let str1 = document.querySelector("h1").innerText;
alert(str1);
//add an event listener to that element that console logs the sum of the two previous variables
document.querySelector("h1").addEventListener("click", run2)

function run2(){
  console.log(input + num1);
}