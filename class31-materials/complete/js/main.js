class Animal{
  constructor(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
  speak(){
    console.log(`${this._name} can speak`)
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name);
    this._breed = breed;
  }
  get breed(){
    return this._breed;
  }
  speak(){
    super.speak();
    console.log(`Barkkkkk!!!!`)
  }
}

class Cat extends Animal{
  constructor(name, type){
    super(name);
    this.type = type;
  }
  speak(){
    super.speak();
    console.log(`meowwwwwww!!!`);
  }
}

let animal1 = new Animal("animal");
let dog1 = new Dog("smokey", "shepherd");
let cat1 = new Cat("bisky", "Persian");
//console.log(animal1.name);
//console.log(dog1.breed);
//console.log(cat1.type);

let farm = [animal1, dog1, cat1];
for (a of farm){
  console.log(a.name);
  a.speak();
}