//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.color = 'black';
stopwatch.model = 'Pro';
stopwatch.make = 'gShock';
stopwatch.type = 'aqua';

stopwatch.tellTime = function(){
  console.log(`Time is Good`);
}
stopwatch.tellDate = function(){
  console.log(`Date is okay`)
}
stopwatch.tellModel = function(){
  console.log(`MOdel is new`);
}

function MakeCar(color, model, make){
  this.color = color;
  this.model = model;
  this.make = make;

  this.honk = function() {
    console.log(`HONKKKKK!!`);
  }
  this.wash = function() {
    console.log(`Washinngggg!!`);
  }
}
let city = new MakeCar('black', 'honda', '2020');
let corolla = new MakeCar('black', 'toyota', '2010');