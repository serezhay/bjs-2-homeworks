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
  if (
    isNaN(percent) || 
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths) 
    ) {
      return false
    }
  percent = (percent / 100) / 12;
  bodyCredit = amount - contribution;
  payment = bodyCredit * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  totalAmount = +(payment * countMonths).toFixed(2);
  return(totalAmount)
}