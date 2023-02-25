//Write your pseduo code first! 
//take input 
document.querySelector("h2").addEventListener("click", run)

function run() {
  let num;
  num = Number(document.querySelector("input").value);

  //perform arithmetic
  let result = num * 9/5 +32;
  
  //spell out the result
  document.querySelector("#placeForResult").innerHTML = result;
}
