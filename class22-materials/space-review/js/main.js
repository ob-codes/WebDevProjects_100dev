//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5,6,7,8,9];
let sum = 0;
  
nums.forEach(x => sum += x);
console.log(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numbers = [7,8,9,10,11,12];

let squaredNums = numbers.map(x => x*x);

console.log(squaredNums);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
  let revStr = "";

  for (let i = str.length-1; i >= 0 ; i--) {
    revStr += str[i];    
  }
  
  return revStr;
}
console.log(reverseString("its a string"));
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function checkForPalindrome(str){
  let result = "true";
  
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i])
    {
      result = "false";
      break;
    }
  }
  
  return result;
}
console.log(checkForPalindrome("leonnoel"));