// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "";
sentence = "is this a sentence?"

sentence.charAt(sentence.length -1) === '?' ? alert(sentence) : "";

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let var1 = "";
var1 = "Hi, I am a jr. dev. Working at Apple as jr. dev"

var2 = var1.replaceAll("jr. dev","software engineer");
console.log(var2);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors(){
  randomVal = Math.random();

  if (randomVal < 0.333)
    return "rock";
  else if (randomVal < 0.666)
    return "paper";
  else
    return "scissors";
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(humanInput){
  let botInput = rockPaperScissors();
  
  if (humanInput === botInput)
    return "tie";
  else if ((humanInput === "rock" && botInput === "paper") 
      || (humanInput === "paper" && botInput === "scissors")
      || (humanInput === "scissors" && botInput === "rock"))
    return "you loose";
  else
    return "you won";
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playRPSXTimes(x){
  x.forEach(x => console.log(playRPS(x)));
}
playRPSXTimes(["rock", "paper", "scissors", "scissors", "paper", "rock"]);
