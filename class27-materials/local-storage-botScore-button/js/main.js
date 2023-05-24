//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem("count"))
  localStorage.setItem("count", 0);

document.querySelector("button").addEventListener("click", increaseCounter);

function increaseCounter(){
  let botScore = localStorage.getItem("count");  
  botScore++;
  localStorage.setItem("count", botScore);
  document.querySelector("h2").innerText = botScore;
}
