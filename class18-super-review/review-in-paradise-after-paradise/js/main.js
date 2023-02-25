// Create a function that takes in an array.
//If the first number, is less than the last number, alert "Hi". 
//If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour".

function takeArrayAndHi(array1){
  if (array1[0] === array1[array1.length - 1]){
    alert("We close in an hour");
  }else if (array1[0] >= array1[array1.length - 1]){
    alert("Bye");
  }else 
    alert("Hi");
}

takeArrayAndHi(['5', '3']);