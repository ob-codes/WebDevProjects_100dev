//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.color = 'black';
stopwatch.model = 'Pro';
stopwatch.make = 'gShock';
stopwatch.type = 'aqua';

stopwatch.tellTime = function(){
  console.log(`Time is Good`);
}
stopwatch.tellDate = function(){
  console.log(`Date is okay`)
}
stopwatch.tellModel = function(){
  console.log(`MOdel is new`);
}