//Create a mouse object that has four properties and three methods
/********* literal method********* */
let mouse = {};

mouse.color = "black";
mouse.wireless = false;
mouse.postionX = 0;
mouse.postionY = 0;

mouse.move = function(x, y){
  mouse.postionX += x;
  mouse.postionY += y;
}
mouse.click = function(){
  console.log("its click");
}
mouse.doubleClick = function(){
  console.log("its double click");
}

/********* Constructor method********* */
/****************Easy to reproduce************* */
function MakeMouse(color, wireless, posX, posY){
  this.color = color;
  this.wireless = wireless; 
  this.postionX = posX;
  this.postionY = posY;

  this.move = function(){
    this.postionX += posX;
    this.postionY += posY;
  }
  this.click = function(){
    console.log("its a click");
  }
  this.doubleClick = function(){
    console.log("its a double click");
  }
}
let mouse2 = new MakeMouse('blue', true, 12, 44);