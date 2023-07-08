//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
/*
function MakeCoffeMachine(model, brand, totalFlavors, deliveryTime){
  this.model = model;
  this.brand = brand;
  this.noOfFlavor = totalFlavors;
  this.deliveryTime = deliveryTime;

  this.makeEspresso = function(){
    console.log(`making espresso`);
  }
  this.updateFirmware = function(){
    console.log(`updating machine`);
  }
  this.updateFirmware = function(){
    console.log(`updating machine`);
  }
}

let machine1 = new MakeCoffeMachine("mTx-221", "Huawei", 6, 20);
*/
class coffeMachines{
  constructor(model, brand, totalFlavors, deliveryTime){
    this.model = model;
    this.brand = brand;
    this.noOfFlavor = totalFlavors;
    this.deliveryTime = deliveryTime;
  }
  
  mixFlavors = function(){
    console.log(`mixing flavors`);
  }
  marketBrand = function(){
    console.log(`I'm , ${this.brand} best coffee machine`);
  }
  tellDeliveryTime = function(){
    console.log(`I'd take ${this.deliveryTime} minutes`);
  }
}

let machine2 = new coffeMachines("i-323", "Apple", 8, 10);