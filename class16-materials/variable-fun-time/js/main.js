//--- Easy
//create a variable and assign it a number
let num = 76;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);


//--- Medium
//create a variable that holds a value from the input

//document.querySelector("#danceDanceRevolution").addEventListener(, takeinput);

let input = document.querySelector("#danceDanceRevolution").value;

//add 25 to that number
input += 25;
//alert that number
alert(input);

//--- Hard
//create a variable that holds the h1
let heading;

heading = document.querySelector("h1");

console.log(heading);

//add an event listener to that element that console logs the sum of the two previous variables


heading.addEventListener("click", sum);

function sum(){
 
  let result = num + parseInt(input);
  console.log(result);
}