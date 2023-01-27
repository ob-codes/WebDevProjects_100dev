//Write your pseduo code first! 
//1.take temp input in celsius
//2.calculate fareinheight
//3.display result

let temp = 0;

document.querySelector("#run").addEventListener("click", calculation)

function calculation(){

  temp = document.querySelector("#inputPlace").value;
  result = temp *9/5 +32;

  document.getElementById("placeToPutResult").innerHTML = result;
}
