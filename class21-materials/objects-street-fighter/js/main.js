//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter(name, gender, specialMove, lethality){
  this.name = name;
  this.gender = gender;
  this.specialMove = specialMove;
  this.lethality = lethality;
  this.taunt = function(){
    console.log(`Dont let me try ${this.specialMove} ha ha!`);
  }
  this.yellName = function(){
    console.log(`you know who I am ?? I'm ${this.name}`);
  }
  this.lethality = function(){
    console.log(`my favorite move? its ${this.specialMove}`)
  }
}

let f1 = new MakeFighter('yuri', "male", "flying kick", 6);