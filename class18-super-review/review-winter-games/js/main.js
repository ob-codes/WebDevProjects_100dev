//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the 
//original array (do not use map or filter)

function returnEvenNum(array1){
  let array2 = [];
  for(let i=0; i < array1.length; i++){
    if(array1[i] % 2 === 0){
      array2.push(array1[i]);
    }
  }
  console.log(array2);
}

returnEvenNum(['1', '2', '3', '4', '5', '6', '7']);