const contestants = document.querySelectorAll(".contestant")

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains("rose")){
		document.querySelector('#nikki').classList.toggle("hidden")
	}else{
		alert("Wrong!");
	}
}


/*
document.querySelector(".rose").addEventListener("click", showRose);
document.querySelector(".contestant").addEventListener("click", showClaire);

function showRose() {
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#nikki").classList.toggle("hidden");
}

function showClaire() {	
	document.querySelector("#nikki").classList.add("hidden");
	alert("Wrong selection");	
}


*/