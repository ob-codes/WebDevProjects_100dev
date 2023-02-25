//Create a function that takes in a number. The function should return an array that 
//contains every number from 1 to that number as seperate elements

function returnArray(num){
  let array1 = [];
  
  for(let i=1; i <= num;i++){
    array1[i - 1] = i;
  }
  return array1;
}

console.log(returnArray);