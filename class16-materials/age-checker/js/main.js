//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let h1Holder = document.querySelector("h1");
let paraHolder = document.querySelector("p");

h1Holder.addEventListener("click", checkAge);

function checkAge(){
  let inputVal = document.querySelector("#danceDanceRevolution").value;

  inputVal = parseInt(inputVal);

  if(inputVal < 16) {
    paraHolder.innerHTML = "can not drive";
  }
  else if(inputVal < 18) {
    paraHolder.innerHTML = "can't hate from outside the club, because they can't even get in";
  }
  else if(inputVal < 21) {
    paraHolder.innerHTML = "they can not drink";
  }
  else if(inputVal < 25) {
    paraHolder.innerHTML = "can not rent cars affordably";
  }
  else if(inputVal < 30) {
    paraHolder.innerHTML = "can not rent fancy cars affordably";
  }
  else  if (inputVal >= 30) {
    paraHolder.innerHTML = "nothing left to look forward too";
  }
}