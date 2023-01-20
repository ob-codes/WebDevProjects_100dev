let total = 0;

document.getElementById("pumpkin").addEventListener('click', makeZero);
document.querySelector("#dominosPizza").addEventListener('click', addThree);
document.querySelector("#zebra").addEventListener('click', addNine);
document.getElementById("cantThinkOfAnything").addEventListener('click', subTwo);
document.getElementById("multiple").addEventListener("click", multiplyTen);


function makeZero(){
  total = 0;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function addThree(){
  total += 3;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function addNine(){
  total += 9;
  document.querySelector("#placeToPutResult").innerText = total;
}

function subTwo(){
  total -= 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function multiplyTen(){
  total *= 10;
  document.getElementById("placeToPutResult").innerText = total;
}