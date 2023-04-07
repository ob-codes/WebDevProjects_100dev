// // *Variables*
// // Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " cocacola " ;

favDrink = favDrink.trim();

console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWordString = "";
multiWordString = "it is a multiword string";

let check = multiWordString.search("apple");

check < 0 ? console.log("false") : console.log("true");

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function randomOut(){
  let result, rando;
  rando = Math.random();
  
  if (rando < 0.333)
    result = "rock";
  else if (rando < 0.667)
    result = "paper"; 
  else
    result = "scissors";  

  return result;
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function gameRockPaperScissors(userInput){
  let botChoice = randomOut();

  if ((userInput === "rock" && botChoice === "scissors")
      || (userInput === "paper" && botChoice === "rock")
      || (userInput === "scissors" && botChoice === "paper"))
      console.log("win");
  else if (userInput === botChoice)
    console.log("tie"); 
  else
    console.log("loose"); 
}
// let userInput = randomOut();
// console.log(gameRockPaperScissors(userInput));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playMultipleTimes(choices) {
  // for (let i =0; i< choices.length; i++)
  // {
  //   console.log(gameRockPaperScissors(choices[i]));
  // }

  choices.forEach(x => gameRockPaperScissors(x));

}
playMultipleTimes(["rock", "paper", "scissors"]);