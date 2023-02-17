document.querySelector("#andiNext").addEventListener("click", andiNext);
document.querySelector("#claireNext").addEventListener("click", claireNext);
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);

function andiNext(){
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#sharleen").classList.add("hidden");
	document.querySelector("#andi").classList.remove("hidden");
}

function claireNext(){
	document.querySelector("#claire").classList.remove("hidden");
	document.querySelector("#sharleen").classList.add("hidden");
	document.querySelector("#andi").classList.add("hidden");
}

function sharleenNext(){
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#sharleen").classList.toggle("hidden");
	document.querySelector("#andi").classList.add("hidden");
}