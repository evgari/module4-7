'use strict';

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const testArr = [[5, 10], [2, 6], [1, 100]];

const getAveragePriceGoods = ([...arr]) => {
  let allSum = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let [n, sum] = arr[i];

    allSum += sum * n;
    total += n;
  }

  const averagePriceGoods = Math.trunc(allSum / total);
  return averagePriceGoods;
};

const averagePriceGoods = getAveragePriceGoods(allCashbox);
console.log(averagePriceGoods);