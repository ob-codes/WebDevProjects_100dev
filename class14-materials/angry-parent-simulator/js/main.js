document.querySelector("#yell").addEventListener("click", doYell)

function doYell(){
  let fName = document.querySelector("#firstName").value;
  let fmName = document.querySelector("#firstMiddle").value;
  let lmName = document.querySelector("#lastMiddle").value;
  let lName = document.querySelector("#lastName").value;

  result = `${fName} ${fmName} ${lmName} ${lName}`;
  document.querySelector("#placeToYell").innerHTML = result;
}
/*

const synth = window.speechSynthesis;
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`

  document.querySelector('#placeToYell').innerText = yellText

  let yellThis = new SpeechSynthesisUtterance(yellText);

  synth.speak(yellThis);
}
*/