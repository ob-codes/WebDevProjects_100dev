document.querySelector(".contestant").addEventListener("click", run1);
document.querySelector(".rose").addEventListener("click", run2);

function run1(){
	alert("wrong!!!");
}

function run2(){
	document.querySelector("#nikki").classList.remove("hidden");
}

