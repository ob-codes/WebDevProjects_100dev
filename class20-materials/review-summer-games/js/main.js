//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takeArrayAndMulti(arr1){
  let product =1, x=0;
  /*Approach-1*/
  /*
  for(let i=0;i<arr1.length;i++){
    product *= arr1[i];
  }
  */
 /*Approach-2*/
  arr1.forEach(x => product *= x);
  return product;
}

console.log(takeArrayAndMulti([1,2,3,4,5]));