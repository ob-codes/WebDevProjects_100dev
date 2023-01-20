//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  switch (day) {
    case "tuesday":
    case "thursday":
      document.querySelector("#placeToSee").innerHTML = "YOU HAVE CLASS";
      console.log("YOU HAVE CLASS");
      break;

    case "saturday":
    case "sunday":
      document.getElementById("placeToSee").innerText = "Its The Weekend";
      console.log("Its The Weekend");
      break;

    case "wednesday":
      document.getElementById("placeToSee").innerText = "Its Humpday";
      break; 

    default:
      document.getElementById("placeToSee").innerText = "BORING";
      break;
  }
}
