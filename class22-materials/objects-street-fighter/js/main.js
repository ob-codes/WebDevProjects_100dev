//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
let streetFighter = {};

streetFighter.name = "Zeo";
streetFighter.gender = "Male";
streetFighter.color = "red";

streetFighter.getColor = function(){
  return streetFighter.color;
}

streetFighter.getName = function(){
  return streetFighter.name;
}
streetFighter.getGender = function(){
  return streetFighter.gender;
}

/*************Constructor method********* */
function MakeFighter(fighterName, fighterGender, fighterColor, fighterLethality){
  this.name = fighterName;
  this.gender = fighterGender;
  this.color = fighterColor;
  this.lethality = fighterLethality;

  this.punch = function(){
    console.log("its a punch");
  }
  this.kick = function(){
    console.log("its a kick");
  }
  this.flyingKick = function(){
    console.log("its a flyingn kick");
  }
}
let zeo = new MakeFighter("Zeo", "Male", "black", 8);