//Create a function that has a loop that prints '21' 21 times to the console and then call that function

function looping(){
  for (let i=0; i < 21; i++){
    console.log("21");
    document.querySelector("h2").innerText += " 21";
  }
}

looping();
//Bonus can you make it print '21' 21 times to the dom?
