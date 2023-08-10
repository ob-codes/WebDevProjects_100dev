function subtractAndAlert(num1 , num2) {
  return num1 - num2;
}
alert(subtractAndAlert(7 , 3));

function divideAndLog(num1, num2, num3) {
  return num1 / num2 / num3;
}
console.log(divideAndLog(40, 4, 5));

function takeThreeAndRemainder(num1, num2, num3) {
  return (num1 + num2) % num3;
}
console.log(takeThreeAndRemainder(14, 7, 15));

function complexLogic(num1, num2, num3, num4) {
  const product = num1 * num2;

  if (product > 100) 
    console.log(product + num3 + num4);
  else if (product < 100)
    console.log(product - (num3 - num4));
  else
    alert((product * num3) % num4);
}
complexLogic(20, 5, 10, 4);