//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function print(){
  for (let i=0; i < 21; i++)
  {
    console.log("21\n");
    document.querySelector("#savageSays").innerHTML +="21\n";
  }
}
print();