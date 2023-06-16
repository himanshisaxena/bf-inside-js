'use strict';

let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  if (!isNaN(userInput)) {
    userNumber = Number(userInput);
    break;
  }
}

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);