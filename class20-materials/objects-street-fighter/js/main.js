//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(name, gender, spMove, strength){
  this.name = name;
  this.gender = gender;
  this.spMove = spMove;
  this.strength = strength;

  this.yellName = function(){
    console.log(`my name! ${this.name}`);
  }
}

let fighter1 = new MakeFighter("cobra", "male", "bite", 6);
let fighter2 = new MakeFighter("panther", "male", "flying kick", 8);

/*using prototye inheritence*/
MakeFighter.prototype.size = "small";
MakeFighter.prototype.doSpecialMove = function(){
  console.log(`Gonna ${this.spMove} very hard`);
}
