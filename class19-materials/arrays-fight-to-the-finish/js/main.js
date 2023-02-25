//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["Win or Die", "Die Hard", "Titanic"]

for(let i=0;i<movies.length;i++){
  document.querySelector("h2").innerText += movies[i];
}
//movies.forEach((document.querySelector("h2").innerText) => movies[])

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1,2,3,4];
console.log(numbers);

// for(let i=0; i<numbers.length;i++){
//   numbers[i] +=3;
// }
numbers.forEach((item, idx) => {
  return numbers[idx] += 3;
  //return numbers;
})
console.log(numbers);

//Find the average of all the numbers from question three
let sum = 0;
for(let i=0; i < 3; i++){
  sum += numbers[i];
}
console.log(sum/numbers.length);