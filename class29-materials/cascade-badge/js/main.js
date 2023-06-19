//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 
function reverseList(arr){
  let res = [];
  /*
  while(arr.length > 0){  
    res.push(arr.pop());
  }
  */
  res = arr.reverse();

  return res;
}
console.log(reverseList(["first", "second", "third", "fourth"]));

//Given two integer arrays a, b, both of length >= 1, create a program that 
//returns true if the sum of the squares of each element in a is strictly 
//greater than the sum of the cubes of each element in b.
function returnStrictGreater(a, b){
  /*
  let sumA=0, sumB=0;
  a.forEach(element => {
    sumA += element*element;
  });

  b.forEach(element => {
    sumB += element*element*element;
  });

  if (sumA > sumB)
    return "true";
  else
    return "false";
  */
  return a.reduce((acc, element) => acc + element*element, 0) > b.reduce((acc, element) => acc + element*element*element, 0);  
}
console.log(returnStrictGreater([4,5,6], [1,2,3]));

//Return a new array consisting of elements which are multiple of their own 
//index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function ownMultiple(arr){
  let resArray = [];

  arr.forEach((element,idx) => {
    if (element % idx === 0)
    resArray.push(element);
  });

  return resArray;
}

console.log(ownMultiple([68, -1, 1, -7, 10, 10] ));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.