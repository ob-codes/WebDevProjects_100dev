//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, topping, crust, servingSize){
  this.size = size;
  this.topping = topping;
  this.crust = crust;
  this.servingSize = servingSize;

  this.tellDeliveryTime = function(){
    console.log(`Calculating...`)
  }

  this.tellTopping = function(){
    console.log(`this pizza has ${this.topping}`);
  }

  this.tellCrust = function(){
    console.log(`this pizza has ${this.crust} crust`);
  }
}

let pizza = new PizzaMachine('medium', ['spinach', 'garlic'], 'thick', 2);