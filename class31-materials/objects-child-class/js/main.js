//Create an a class and extend it - Can be anything you would like it to be! 
class Animal{
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(`${this.name} can speak!`);
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }
}

let simba = new Dog("simba", "sheperd");

class Cat extends Animal{
  constructor(name, type){
    super(name);
    this.type = type;
  }
  walk(){
    console.log(`${this.name} can walk`);
  }
}

let mewww = new Cat("mewww", "domestic");