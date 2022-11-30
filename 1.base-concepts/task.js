"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  let discriminant;
  let x;
  let y;
  discriminant = b**2 - 4*a*c;
  if (discriminant > 0) {
    x = (-b + Math.sqrt(discriminant) ) / (2*a);
    y = (-b - Math.sqrt(discriminant) ) / (2*a);
    arr.push(x,y);
  }
  if (discriminant === 0) {
    x = -b / (2*a);
    arr.push(x);
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let payment;
  let totalAmount;
 if (isNaN(percent)) {
  alert(`Параметр "percent" содержит не правильное значение "${percent}"`)
 };
 if (isNaN(contribution)) {
  alert(`Параметр "contribution" содержит не правильное значение "${contribution}"`)
 };
 if (isNaN(amount)) {
  alert(`Параметр "amount" содержит не правильное значение "${amount}"`)
 };
 if (isNaN(countMonths)) {
  alert(`Параметр "countMonths" содержит не правильное значение "${countMonths}"`)
 };
  percent = (percent / 100) / 12;
  bodyCredit = amount - contribution;
  payment = bodyCredit * (percent + (percent / (((1 + percent)**countMonths) - 1)));
   totalAmount = +(payment * countMonths).toFixed(2);
  return(totalAmount)
}
calculateTotalMortgage(10, 0, 50000, 12)
calculateTotalMortgage(10, 1000, 50000, 12)
calculateTotalMortgage(10, 0, 20000, 24)
calculateTotalMortgage(10, 1000, 20000, 24)