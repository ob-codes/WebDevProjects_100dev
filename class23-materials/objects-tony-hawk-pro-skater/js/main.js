//Create a Tony Hawk Pro Skater constructor that makes fighting game characters 
//with 4 properties and 3 methods

function CreateTonyHawkCharacter(chName, chStance, chSponsor, chMove){
  this.name = chName;
  this.stance = chStance;
  this.sponsor = chSponsor;
  this.specialMove = chMove;
  this.doSpecialMove = function(){

  }
  this.flip = function(){
    console.log('its flip');
  }
  this.taunt = function(){
    console.log(`Dont make me use my ${this.specialMove}`)
  }
  this.grab = function(){
    console.log('grabb');
  }
}

let kareemCampbell = new CreateTonyHawkCharacter('kareem', 'Goofy', 'Element', 'Ghetto Bird');