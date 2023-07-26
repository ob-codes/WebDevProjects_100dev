// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
/*
class Contractor{
  constructor(totalHours, hourlyRate, hourlyExpense) {
    this.totalHours = totalHours;
    this._hourlyRate = hourlyRate;
    this._hourlyExpense = hourlyExpense;  
  }
  tellBill(){
    let bill = this.totalHours * this.hourlyRate;
    return bill;
  }
  get tellExpense(){
    let _expense = this.totalHours * this.hourlyExpense;   
    return _expense;
  }
  get tellProfit(){
    let _profit = this.tellBill() - this.tellExpense();
    return _profit;
  }
  set setRole(newRole){
    this._role = newRole;
  }
  get getRole(){
    return this._role;
  }
}

class Frontend extends Contractor{
  constructor(totalHours){
    let hourlyRate = 35;
    let hourlyExpense = 10;

    super(totalHours, hourlyRate, hourlyExpense);
  }  
  totalBill(){
    console.log(`total bill for frontend job: ${this.tellBill()}`);
  }
  totalProfit(){
    console.log(`total profit for frontend job: ${this.tellProfit()}`)
  }
}

class Backend extends Contractor{
  constructor(totalHours){
    let hourlyRate = 45;
    let hourlyExpense = 25;

    super(totalHours, hourlyRate, hourlyExpense);
  }
  totalBill(){
    console.log(`total bill for backend job: ${this.tellBill()}`);
  }
  totalProfit(){
    console.log(`total profit for backend job: ${this.tellProfit()}`)
  }
}

let fe = new Frontend(8);
let be = new Backend(12);
*/
class Contractor{
  constructor(name, role){
    this._name = name;
    this._role = role;
  }
  get name(){
    return this._name;
  }
  get role(){
    return this._role;
  }
  set role(newRole){
    this._role = newRole;
  }
  sayHello(){
    console.log(`Hi I am ${this._name} and I'm ${this._role}`)
  }
}

class Frontend extends Contractor{
  constructor(name, role, tech){
    super(name, role);
    this._tech = tech;
  }
  get tech(){
    return this._tech;
  }
  sayHello(){
    console.log(`Hi I am ${this._name} working as a FrontEnd engineer`)
  }
}

class Backend extends Contractor{
  constructor(name, role, tech){
    super(name, role);
    this._tech = tech;
  }
  get tech(){
    return this._tech;
  }
  sayHello(){
    console.log(`Hi I am ${this._name} working as a BackEnd engineer`)
  }
}

let cont = new Contractor("Moshi", "Cont");
let fee = new Frontend("Moshi", "FE", "React");
let bee = new Backend("Moshi", "BE", "Node");