//Create a street fighter constructor that makes fighting game 
//characters with 4 properties and 3 methods
/*
function MakeFighter(name, gender, lethality, spMove) {
  this.name = name;
  this.gender = gender;
  this.lethality = lethality;
  this.spMove = spMove;

  this.tellSpecialMove = function () {
    console.log(`this is my ${this.spMove}`);
  }
  this.tellLethality = function () {
    console.log(`this is my ${this.lethality}`);
  }
  this.yell = function () {
    console.log(`ha ha ha! come ONNNNNN`);
  }
}
*/

class MakeFighter{
  constructor(name, gender, lethality, spMove){
    this.name = name;
    this.gender = gender;
    this.lethality = lethality;
    this.spMove = spMove;
  }
  tellSpecialMove() {
    console.log(`this is my ${this.spMove}`);
  }
  tellLethality() {
    console.log(`this is my ${this.lethality}`);
  }
  yell() {
    console.log(`ha ha ha! come ONNNNNN`);
  }
}

let fighter1 = new MakeFighter('yokho', 'M', 8, 'punch');
let fighter2 = new MakeFighter('zolo', 'F', 9.2, 'kick');