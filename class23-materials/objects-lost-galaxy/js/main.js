//Create a dog object that has four properties and three methods
let dog = {};

dog.name = 'marco';
dog.color = 'brown';
dog.age = 4;
dog.breed = 'german shepherd';

dog.tellColor = function(){
  console.log(`${this.name} has ${this.color} color`)
}
dog.tellAge = function(){
  console.log(`${this.name} is ${this.age} years old`);
}
dog.shakeHand = function (){
  console.log(`${this.name} shakes hand`);
}


function CreateDog(name, color, age, breed){
  this.name = name;
  this.color = color;
  this.age = age;
  this.breed = breed;

  this.tellAge = function(){
    console.log(`${name} is ${age} years old`);
  }
}

let dog2 = new CreateDog('Zulo', 'black', 3, 'poodle');