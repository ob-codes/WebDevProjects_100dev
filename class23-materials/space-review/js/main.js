//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5];

console.log(nums.reduce((acc, x) => acc + x, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let num2 = [15,14,12,11];

let num3 = num2.map((x) => x*x);

console.log(num3);
//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str){
  let revString = str.split("").reverse().join("");
  return revString;
}
console.log(reverseString("now its reverse"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str2){
  let result = true;
  
  let str =  str2.split("");
  
  while(str.length > 0){
    if (str.pop() !== str.shift())
    {
      result = false;
      break;
    }
  }
  
  return result;
}
console.log(isPalindrome("leonnoel"));