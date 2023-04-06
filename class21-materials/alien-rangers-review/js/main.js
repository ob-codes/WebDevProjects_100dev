//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["Narcos", "Breaking Bad", "Quiltbolt"];
shows.forEach(x => console.log(x));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [1,2,3,4,5,6];
let newNums = [];
newNums = nums.filter(x => (x % 2 === 0));
console.log(newNums);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function takeAndAlert(arr){
  let result = 0;
  arr = arr.sort();
  result = arr[1] + arr[arr.length - 2];

  return result;
}

console.log(takeAndAlert([3,4,8,7,2]));