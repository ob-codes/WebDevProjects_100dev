let total = 0;

document.getElementById('pumpkin').addEventListener('click', addZero)
document.getElementById('dominosPizza').addEventListener('click', addThree)
document.getElementById('zebra').addEventListener('click', addNine)
document.getElementById('cantThinkOfAnything').addEventListener('click', minusTwo)

function addZero() {
  total = 0;
  document.querySelector('#placeToPutResult').innerText = total;
}
function addThree() {
  total += 3;
  document.querySelector('#placeToPutResult').innerText = total;
}
function addNine() {
  total += 9;
  document.getElementById('placeToPutResult').innerText = total;
}
function minusTwo() {
  total -= 2;
  document.getElementById('placeToPutResult').innerText = total;
}