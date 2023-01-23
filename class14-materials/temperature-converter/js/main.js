//Write your pseduo code first! 
let temp = 0;

document.querySelector("#run").addEventListener("click", calculation)

function calculation(){

  temp = document.querySelector("#inputPlace").value;
  result = temp *9/5 +32;

  document.getElementById("placeToPutResult").innerHTML = result;
}
