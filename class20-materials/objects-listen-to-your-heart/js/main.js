//Create a stopwatch object that has four properties and three methods

function MakeStopWatch(color, model, brand, price){
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.price = price;

  this.start = function(){
    console.log(`Watch has started ....`);
  }
  this.stop = function() {
    console.log(`Watch has stopped ....`);
  }
  this.tellModel = function(){
    console.log(`Model of this watch is: ${this.brand}`);
  }
}

let watch1 = new MakeStopWatch("black", "GTX-2232", "Huawei", 200);

class watch{
  constructor(name, brand, color, model){
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.model = model;
  }
  tellTime(){
    console.log(`time is ticking`);
  }
  stopTime(){
    console.log(`time is stopped`);
  }
}

let watch2 = new watch("myWatchPro", "Oppo", "blue", "i3");
