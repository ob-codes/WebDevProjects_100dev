// Variables
//You are getting ready to face Brock for the Boulder Badge. 
//You want three pokemon on your team that each have evolved at least once. 
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 
//and evolves at level 7, and weedle which is at level 1 and evolves at level 7. 
//Create three variables to store the number of rare candies each of your pokemon would 
//need to evolve (rare candies increase your level by one). Finally, create a fourth 
//variable named totalCandies that sums all the rare candies you would need. 
function pokemonEvolve(){
  const evoLevelBulbsaur = 16;
  const evoLevelOthers = 7;

  let needLevelBulbsaur = evoLevelBulbsaur - 5;
  let needLevelCaterpie = evoLevelOthers - 1;
  let needLevelWeedle = evoLevelOthers - 1;

  let totalCandies = needLevelBulbsaur + needLevelCaterpie + needLevelWeedle;
  return totalCandies;
}
console.log(pokemonEvolve());

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the 
//temperature is above 0 degrees celcius. Create one function that converts a 
//Fahrenheit value to Celcius and another fuction that tells you wheither or 
//not charmander can battle
function tempConverter(fahrenheit){
  return (fahrenheit -32) *5/9;
}
function checkForFight(inputTemperature){
  if (tempConverter(inputTemperature) > 0)
    return  "fight";
  else
    return "no fight";

}
console.log(checkForFight(-31));

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use 
//any number of pokemon. Print to the console "Pikachu I choose you" x times 
//where x is the number of pokemon the trainer you are battling has in their party
function undegroundPokemonLeauge(x){
  for(let i =0; i<x ;i++) {
    console.log(`Pikachu I choose you`);
  }
}

undegroundPokemonLeauge(2);