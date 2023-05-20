// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method
function printAffirmation(var1, num) {
  for (let i = 0; i < num; i, i++) {
    console.log(var1);
  }  
}
let var1 = "yes, it is like this";
printAffirmation(var1, 4);

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 
let arr = ['c','o','d','e','O','B']
alert(arr.join(""));

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible
function returnRandom(){
  let num = Math.random();

  if (num <0.2) {
    return "rock"; 
  }
  else if (num <0.4) {
    return "paper";  
  }
  else if (num <0.6) {
    return "lizard"; 
  }
  else if (num <0.8) {
    return "spock"; 
  }
  else {
    return "scissors";
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function
function randomGame(userChoice){
  let botChoice = returnRandom();

  console.log("user choice: " + userChoice);
  console.log("bot choice: " + botChoice);

  if (userChoice === botChoice)
    return "tie";
  else if (userChoice === "scissors" && botChoice === "paper")
    return "won";
  else if (userChoice === "paper" && botChoice === "rock")
    return "won";  
  else if (userChoice === "rock" && botChoice === "lizard")
    return "won";  
  else if (userChoice === "lizard" && botChoice === "spock")
    return "won"; 
  else if (userChoice === "spock" && botChoice === "scissors")
    return "won"; 
  else if (userChoice === "scissors" && botChoice === "lizard")
    return "won"; 
  else if (userChoice === "lizard" && botChoice === "paper")
    return "won"; 
  else if (userChoice === "paper" && botChoice === "spock")
    return "won"; 
  else if (userChoice === "spock" && botChoice === "rock")
    return "won"; 
  else if (userChoice === "rock" && botChoice === "scissors")
    return "won"; 
  else
    return "loose";
}

console.log(randomGame(returnRandom()));
