document.getElementById('purple').addEventListener("click", setPurple);
document.getElementById('green').addEventListener("click", setGreen);
document.getElementById('blue').addEventListener("click", setBlue);
document.getElementById('red').addEventListener("click", setRed);
document.querySelector("#gray").addEventListener("click", setGray);

function setPurple(){
  document.querySelector("body").style.background = "rgba(241,63,247,1)";
}

function setGreen(){
  document.querySelector("body").style.background = "rgba(0,253,81,1)";
}

function setBlue(){
  document.querySelector("body").style.background = "rgba(0,254,255)";
}

function setRed(){
  document.querySelector("body").style.background = "rgba(200,0,0,1)";
}

function setGray(){
  document.querySelector("body").style.background = "rgba(128, 128, 128, 1)";
}