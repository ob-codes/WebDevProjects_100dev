let num = 3;
console.log(num);


let num2 = 10;
alert(num2 + 22);


function subFourAndAlert(n1, n2, n3, n4) {
  alert(n1 - n2 - n3- n4);
}
subFourAndAlert(10, 8, 4, 2);


function returnRemainder(n1, n2) {
  console.log(n1 % n2);
}
returnRemainder(13, 4);


function addTwoAndAlert(a, b) {
  if (a + b > 50)
    alert("Jumanji");
}
addTwoAndAlert(44, 9);


function multiplyAndAlert(n1, n2, n3) {
  if (n1*n2*n3 % 3 == 0)
    alert("Zebra");
}
multiplyAndAlert(7,3,1);


function printWords(word, times) {
  for (let idx = 0; idx <  times; idx++) {
    console.log(word);
  }
}
printWords("printing", 12);