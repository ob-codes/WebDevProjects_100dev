//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class Pokemon{
  constructor(name, age,  color, type){
    this.name = name;
    this.age = age;
    this.type = type;
    this.color = color;
  }
  printType(){
    console.log(`type is: ${this.type}`);
  }
  printName(){
    console.log(`name is: ${this.name}`);
  }
}
pokemon1 = new Pokemon("yoo", 1, "black", 12);
pokemon1.printName();
pokemon1.printType();
