let num = 22;
num -= 10;
console.log(num);

/************************************/
let inputValue=0;
document.querySelector("button").addEventListener("click", calculate);
function calculate() {
  inputValue = Number(document.querySelector("input").value);
  inputValue += 35;
  alert(inputValue);
}

/************************************/
let h1 = document.querySelector("h1");
h1.addEventListener("click", addLastTwo);
function addLastTwo() {
  let sum = num + inputValue;
  h1.innerText = sum;
}

