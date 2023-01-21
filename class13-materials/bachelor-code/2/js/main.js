

document.querySelector("#andiNext").addEventListener("click", showAndi);
document.querySelector("#claireNext").addEventListener("click", showClaire);
document.querySelector("#sharleenNext").addEventListener("click", showSharleen);

function showAndi() {
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#sharleen").classList.add("hidden");
	document.querySelector("#andi").classList.toggle("hidden");
}

function showClaire() {
	document.querySelector("#andi").classList.add("hidden");
	document.querySelector("#sharleen").classList.add("hidden");
	document.querySelector("#claire").classList.toggle("hidden");
}

function showSharleen() {
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#andi").classList.add("hidden");
	document.querySelector("#sharleen").classList.toggle("hidden");
}
