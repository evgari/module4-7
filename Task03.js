'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  const newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    newArr.splice(i, 1, `${prefix} ${newArr[i]}`);
  }

  return newArr;
};

const preNames = addPrefix(names, 'Mr');
console.log(preNames);


  



