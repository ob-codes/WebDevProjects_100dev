// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Contractor{
  constructor(totalHours, hourlyRate, hourlyExpense) {
    this.totalHours = totalHours;
    this.hourlyRate = hourlyRate;
    this.hourlyExpense = hourlyExpense;  
  }
  tellBill(){
    let bill = this.totalHours * this.hourlyRate;
    return bill;
  }
  tellExpense(){
    let expense = this.totalHours * this.hourlyExpense;   
    return expense;
  }
  tellProfit(){
    let profit = this.tellBill() - this.tellExpense();
    return profit;
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