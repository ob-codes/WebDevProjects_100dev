//Create a stopwatch object that has four properties and three methods
let stopWatch = [];

function MakeStopWatch(model, make, color, seconds){
  this.model = model;
  this.make = make;
  this.color = color;
  this.seconds = seconds;

  this.start = function(){
    console.log(`starting...`);
  }
  this.stop = function(){
    console.log(`stoping...`);
  }
  this.tellTime = function(){
    console.log(`seconds: ${this.seconds}`);
  }
  this.reset = function(){
    this.seconds = 0;
  }
}

let watch1 = new MakeStopWatch('mi-11', 'xiaomi', 'black', 15);