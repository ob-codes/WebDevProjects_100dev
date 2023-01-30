//document.querySelector(".rose").addEventListener("click", rose1);
//document.querySelector(".contestant").addEventListener("click", execute);


const contestants = document.querySelectorAll(".contestant");

Array.from(contestants).forEach(element => element.addEventListener("click", checkForRose));

/*
function rose1(){
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#nikki").classList.toggle("hidden");
}

function execute(){
	document.querySelector("#claire").classList.add("hidden");
	document.querySelector("#nikki").classList.add("hidden");
	alert("wrong");
}
*/

function checkForRose(click){
	if(click.target.classList.contains("rose")){
		document.querySelector("#nikki").classList.toggle("hidden");
	}
	else{
		alert("wrong");
	}
}
