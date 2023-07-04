document.querySelector("#andiNext").addEventListener("click", getAndi);
document.querySelector("#claireNext").addEventListener("click", getClaire);
document.querySelector("#sharleenNext").addEventListener("click", getSharleen);

function getAndi(){
  document.querySelector("#andi").classList.toggle("hidden");
  document.querySelector("#claire").classList.add("hidden");
  document.querySelector("#sharleen").classList.add("hidden");
}
function getClaire(){
  document.querySelector("#claire").classList.toggle("hidden");
  document.querySelector("#andi").classList.add("hidden");
  document.querySelector("#sharleen").classList.add("hidden");
}
function getSharleen(){
  document.querySelector("#sharleen").classList.toggle("hidden");
  document.querySelector("#claire").classList.add("hidden");
  document.querySelector("#andi").classList.add("hidden");
}