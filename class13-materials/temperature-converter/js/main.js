//Write your pseduo code first! 
/*
-1 declare a input and result variable
0. ask user for input a number
1. take input from user
2. save user input in a variable
3. multiple variable with 5 and save in result
4. divide result with 9 and save in result
5. add 32 to result and save in result
6. output result to console
*/

let input = 0, result = 0;

document.querySelector("#calculate").addEventListener("click", calculate);

function calculate (){
  input = document.querySelector("#inputBlock").value;

  result = input * 9/5 +32;

  document.querySelector("#result").innerText = result;
}
