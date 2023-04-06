//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.color = "black";
stopwatch.size = "small";
stopwatch.company = "casio";
stopwatch.model = "2022";

stopwatch.getColor = () => stopwatch.color;
stopwatch.getSize = () => stopwatch.size;
stopwatch.getModel = () => stopwatch.model;
stopwatch.setColor = (x) => stopwatch.color = x;

console.log(stopwatch.color);
console.log(stopwatch.size);
console.log(stopwatch.model);

stopwatch.setColor("blue");
console.log(stopwatch.color);