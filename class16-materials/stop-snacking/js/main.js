//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector("#help").addEventListener("click", stopSnacks)

function stopSnacks() {
  document.querySelector("#stops").innerHTML = " ";

  let input = document.querySelector("input").value;
  input = parseInt(input);
  
  //document.querySelector("h2").innerText = "";

  for (let i=0;i<input;i++){
    console.log("stop snacking \n");
    document.querySelector("#stops").innerText += "stop snacking\n";
  }  
}