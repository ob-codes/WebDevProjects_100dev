//Create a street fighter constructor that makes fighting game 
//characters with 4 properties and 3 methods

function MakeFighter(name, gender, move, lethality){
  this.name = name;
  this.gender = gender;
  this.specialMove = move;
  this.lethality = lethality;
  this.taunt = function(){
    console.log(`Dont let me ${this.specialMove} your face,ha ha!`);
  }
  this.tellGender = function() {
    console.log(`I am a strong ${this.gender}!`);
  }
  this.yellName = function(){
    console.log(`You must have heard about ${this.name}`);
  }
}

let fighter1 = new MakeFighter('yuri', 'female', 'hard punch', 8);