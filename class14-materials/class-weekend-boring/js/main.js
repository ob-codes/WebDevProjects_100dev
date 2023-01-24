document.querySelector("#check").addEventListener("click", checkDay)

function checkDay(){
  const day = document.querySelector("#day").value.toLowerCase();

  if (day === "tuesday" || day === "thursday")
    document.querySelector("#placeToSee").innerHTML = "CLASS DAY";
  else if (day === "monday" || day === "friday")
    document.querySelector("#placeToSee").innerHTML = "BORING DAY";
  else if (day === "wednesday")
    document.querySelector("#placeToSee").innerHTML = "HUMP DAY";
  else if (day === "saturday" || day === "sunday")
    document.querySelector("#placeToSee").innerHTML = "ITS WEEKEND";
}