'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидорров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидорров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
  const newArr  = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
       newArr.push(arr1[i]);
    }
  }

  return newArr;
};

const successfulStudents = filter(allStudents, failedStudents);

console.log(successfulStudents);
console.log(allStudents);
console.log(failedStudents);


