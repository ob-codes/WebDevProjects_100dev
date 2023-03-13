//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function onlyEvens(arr1){
  let arr2=[];
  let idx=0;

  /* Approach-1 */
  /*
  for(let i=0;i<arr1.length;i++){
    if (arr1[i] %2 ==0)
      arr2[idx++] = arr1[i];
  }
  */
  /* Approach-2 */
  
  arr2 = arr1.map(x => {
    if(x % 2== 0)
      return x;
    else
      return "";
  })
  
  return arr2;
}

console.log(onlyEvens([1,2,3,4]));