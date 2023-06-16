'use strict';

let userInput = '';
let isTooShort = true;
while (isTooShort) {
  userInput = prompt('Enter anything longer than 5 characters');
  console.log('userInput:', typeof userInput, userInput);

  // continue if the user did not input anything
  if (!userInput) {
    continue;
  }

  // continue if the input is too short (5 characters or less)
  if (userInput.length <= 5) {
    alert('Too short');
    continue;
  }

  // toggle the flag variable, telling the loop to finish
  isTooShort = false;
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);