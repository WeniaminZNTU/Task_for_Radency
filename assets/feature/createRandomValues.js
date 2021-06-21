'use strict';

export function getRandomValues(max = 99, numArrElem = 1) {
  if (numArrElem > 1) {
    const randomNumbers = [];

    for (let i = 0; i < numArrElem; i++) {
      randomNumbers.push(Math.floor(Math.random() * max));
    }

    return randomNumbers;
  } else if (numArrElem === 1) {
    while (true) {
      const randNum = Math.floor(Math.random() * max);
      if (randNum) {
        return randNum;
      }
    }
  } else {
    return null;
  }
}
