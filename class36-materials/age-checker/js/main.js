
document.querySelector("button").addEventListener("click", ageChecker);

function ageChecker() {
  let age = Number(document.querySelector("input").value);

  if (age < 16){
    console.log("can't drive");
    document.querySelector("p").innerText = "can't drive";
  }
  else if (age < 18){
    console.log("they can't hate from outside club, can't get in");
    document.querySelector("p").innerText = "they can't hate from outside club, can't get in";
  }
  else if (age < 21){
    console.log("they can't drink");
    document.querySelector("p").innerText = "they can't drink";
  }
  else if (age < 25){
    console.log("they can't rent cars affordably");
    document.querySelector("p").innerText = "they can't rent cars affordably";
  }
  else if (age < 30){
    console.log("they can't rent fancy cars affordably");
    document.querySelector("p").innerText = "they can't rent fancy cars affordably";
  }
  else{    
    console.log("nothing to look forward too");
    document.querySelector("p").innerText = "nothing to look forward too";
  }

}

