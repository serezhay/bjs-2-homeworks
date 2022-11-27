"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let D;
  let x;
  let y;
  D = b**2 - 4*a*c;
  if (D > 0) {
    x = (-b + Math.sqrt(D) ) / (2*a);
    y = (-b - Math.sqrt(D) ) / (2*a);
    arr.push(x,y);
  }
  if (D === 0) {
    x = -b / (2*a);
    arr.push(x);
  }
  if (D < 0) {
    arr.push();
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let payment;
  isNaN(percent);
  isNaN(contribution);
  isNaN(amount);
  percent = (percent / 100) / countMonths;
  bodyCredit = amount - contribution;
  payment = bodyCredit * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  totalAmount = (payment * countMonths).toFixed(2);
  return totalAmount;
}
