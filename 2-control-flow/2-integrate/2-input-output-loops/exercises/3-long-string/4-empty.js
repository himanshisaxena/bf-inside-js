'use strict';

let userInput = '';
let isTooShort = true;
while (isTooShort) {
  userInput = prompt('Enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  if (!userInput) {
    continue;
  }

  if (userInput.length <= 5) {
    alert('Too short');
    continue;
  }

  isTooShort = false;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);