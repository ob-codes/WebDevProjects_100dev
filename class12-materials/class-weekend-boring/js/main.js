let result;

document.querySelector("#check").addEventListener('click', calculate);

function calculate(){
  const inputDayName = document.querySelector("#day").value;
  
  switch (inputDayName) {
    case "monday":
    case "Monday":
    case "wednesday":
    case "Wednesday":
      result = "its class day";
      break;

    case "saturday":
    case "Saturday":
    case "sunday":
    case "Sunday":
      result = "its weekend";
      break;
    
    case "tuesday":
    case "Tuesday":
    case "thursday":
    case "Thursday":
      result = "its boring day";
      break;

    default:
      result = "wrong input";
      break;
  }
  
  document.querySelector("#placeToSee").innerHTML = result;
  document.querySelector("#day").style.innerHTML = " ";
}