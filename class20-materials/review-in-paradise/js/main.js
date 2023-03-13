// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food1;
food1="biryani";

alert(food1);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str1;
str1="its a string";

//alert(str1[1]);
alert(str1.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function maths(n1,n2,n3){
  alert((n1/n2) * n3);
}

maths(12,3,4);
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n1){
  console.log(Math.cbrt(n1).toFixed(4));
}
cubeRoot(7);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function yayOrBoo(inp){
  let month = inp.toLowerCase();
  if (month === "june" || month === "july" || month === "august")
    alert("YAY");
  else
    alert("Boo");
}

yayOrBoo('JUly');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip5(n1){
  for (let i=1;i<=n1;i++){
    if(i%5 === 0) 
      continue;
    else
      console.log(i);
  }
}
skip5(27);