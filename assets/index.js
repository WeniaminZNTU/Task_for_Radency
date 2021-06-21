'use strict';
import { getRandomValues } from './feature/createRandomValues.js';

const chooseBestDistance = (t = 174, k = 3, ls = [51, 56, 58, 59, 61]) => {
  const destinationsPoints = [];

  if (k === 0 || ls.length < k) {
    return null;
  }

  const getFirstValue = (elements) => {
    let largestElement = 0;

    for (let i = 0; i < ls.length; i++) {
      if (largestElement < elements[i]) {
        largestElement = elements[i];
      }
    }

    return largestElement;
  };

  const getValue = (elements, largestElement) => {
    let desiredValue = 0;

    for (let i = 0; i < ls.length; i++) {
      if (elements[i] > desiredValue && elements[i] < largestElement) {
        desiredValue = elements[i];
      }
    }

    return desiredValue;
  };

  const totalDistance = (arrayPoints) => {
    return arrayPoints.reduce((prev, curr) => {
      return prev + curr;
    });
  };

  for (let i = 0; i < k; i++) {
    i === 0
      ? destinationsPoints.push(getFirstValue(ls))
      : destinationsPoints.push(getValue(ls, destinationsPoints[i - 1]));
  }

  if (totalDistance(destinationsPoints) <= t) {
    return totalDistance(destinationsPoints);
  } else {
    for (let i = 0; i < ls.length - k; i++) {
      destinationsPoints.shift();

      const lesserValue = getValue(ls, destinationsPoints[k - 2]);

      destinationsPoints.push(lesserValue);

      const seekDistance = totalDistance(destinationsPoints);

      if (seekDistance <= t) {
        return seekDistance;
      }
    }
  }
  return null;
};

console.log(
  'Результат функции с дефолтными значениями 1:',
  chooseBestDistance()
);
console.log(
  'Результат функции с дефолтными значениями 2:',
  chooseBestDistance(163, 3, [50])
);

const t = getRandomValues(1000);
const k = getRandomValues(10);
const ls = getRandomValues(150, getRandomValues(10));

console.log('t:', t);
console.log('k:', k);
console.log('ls:', ls);
console.log('Результат c рандомными занчениями:', chooseBestDistance(t, k, ls));
