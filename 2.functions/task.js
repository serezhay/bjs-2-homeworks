function getArrayParams(...args) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
    if (args[i] < min) {
      min = args[i];
    }
    sum += args[i];
  }
  sum = +(sum / args.length).toFixed(2);
  result.max = max;
  result.min = min;
  result.avg = sum;
  return result;
}

function summElementsWorker(...arr) {
  let sum = 0;
  for( let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let result = 0;
  if (arr.length <= 1) {
    result = 0;
    return result;
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } 
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  result = max - min ;
  return result
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result;
  if (arr.length <= 1) {
    result = 0;
    return result
  }
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] % 2) {
       sumOddElement += arr[i];
      } else {
       sumEvenElement += arr[i];
     }
  }
  result = sumEvenElement - sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0 ;
  let countEvenElement = 0;
  if (arr.length <= 1) {
    let result = 0;
    return result
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i]% 2 === 0) ) {
      sumEvenElement += arr[i];
      countEvenElement++ ;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
     const result = func(...arrOfArr[i])
     if (result > maxWorkerResult) {
      maxWorkerResult = result;
     }
  }
  return maxWorkerResult;
}
