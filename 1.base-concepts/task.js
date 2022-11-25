"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = b** - 4 * a * c;
  let x;
  let y;
  if (d === 0) {
    x = -b / (2*a);
    arr.push(x)
  }
  if (d > 0) {
    x = (-b +Math.sqrt(d) )/(2*a);
    y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x,y)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}