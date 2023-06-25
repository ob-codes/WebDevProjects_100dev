const players = document.querySelectorAll(".contestant");

for (player of players) {
  player.addEventListener("click", checkForRose);
}

function checkForRose(click) {
  let roseClassValid = click.target.classList.contains("rose");
  if (roseClassValid) {
    document.querySelector("#nikki").classList.toggle("hidden");
  } 
  else {
    alert("wrong!")
  }
}