'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

// const getAverageValue = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]; 
//   }

//   const averageValue = Math.trunc(sum / arr.length);

//   return averageValue;
// };

const getAverageValue = (arr) => {
  let sum = 0;
  let n = 0;

  for (const elem of arr) {
    sum += elem; 
    n++;
  }

  const averageValue = Math.trunc(sum / n);

  return averageValue;
};

const averageCheck = getAverageValue(allCashbox);
console.log(averageCheck);