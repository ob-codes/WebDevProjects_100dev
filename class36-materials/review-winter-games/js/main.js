//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the 
//original array (do not use map or filter)

function returnEvens(arr) {
  let newArr = arr.filter((element => {
    if (element % 2 === 0)
      return element;
  }))  
  return newArr;
}

function takesEvans(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0)
      newArr.push(arr[i]);    
  }
  return newArr;
}

console.log(returnEvens([2,3,4,6,7,8])); //[ 2, 4, 6, 8 ]
console.log(takesEvans([2,3,4,6,7,8]));  //[ 2, 4, 6, 8 ]