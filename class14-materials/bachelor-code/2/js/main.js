document.querySelector("#andiNext").addEventListener("click", andiNext);
document.querySelector("#claireNext").addEventListener("click", claireNext);
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);

function andiNext(){
	document.querySelector("#andi").classList.toggle("hidden");
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#sharleen").classList.add("hidden");
}

function claireNext(){
	document.querySelector("#andi").classList.add("hidden");
	document.querySelector("#claire").classList.toggle("hidden");
	document.querySelector("#sharleen").classList.add("hidden");
}

function sharleenNext(){
	document.querySelector("#andi").classList.add("hidden");
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#sharleen").classList.toggle("hidden");
}