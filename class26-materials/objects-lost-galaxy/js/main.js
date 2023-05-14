//Create a pizza object that has four properties and three methods

/**************************
let pizza={}

pizza.size = 12;
pizza.topping = ['garlic', 'spinach', 'onion', 'pepper', 'jalapenos'];
pizza.crust = 'thin';
pizza.serveSize = 4;

pizza.delivery = function(val){
  val==='yes'?  console.log(`this pizza support delivery`) : console.log(`this pizza does not support delivery`);
}

pizza.deliveryTime = function(val){
  console.log(`calculating`);
}

pizza.servingSize = function(){
  console.log(`this pizza serves ${pizza.serveSize} person`)
}
***********************/

function MakePizza(size, topping, crust, serveSize){
  this.size = size;
  this.topping = topping;
  this.crust = crust;
  this.serveSize = serveSize;

  this.delivery = function(val){
    val==='yes'?  console.log(`this pizza support delivery`) : console.log(`this pizza does not support delivery`);
  }
  
  this.deliveryTime = function(val){
    console.log(`calculating`);
  }
  
  this.servingSize = function(){
    console.log(`this pizza serves ${this.serveSize} person`)
  }
}

let pizza1 = new MakePizza('small', ['chicken', 'onion', 'jalapenos'], 'heavy', 2)
let pizza2 = new MakePizza('large', ['veg', 'cheese', 'jalapenos'], 'thin', 4);