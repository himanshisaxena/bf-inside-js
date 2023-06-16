'use strict';

/* look out for:

  - conditional checks
  - break vs. continue

*/

const instructions =
  'calculate the average of many numbers:\n\n' +
  '- you must input something\n' +
  '- input a number and it will be added to the sum\n' +
  '- input "done" and the program will finish (case insensitive)\n' +
  '- input anything else and it will be ignored\n\n' +
  'when you have finished inputting numbers, the average will be displayed';
alert(instructions);

let sum = 0;
let inputCount = 0;

while (true) {
  const userInput = prompt('Enter a number to add, or "done" to finish');

  if (userInput === '' || userInput === null) {
    alert('Nothing is not allowed');
    continue;
  }

  if (userInput.toLowerCase() === 'done') {
    break;
  }

  const nextNumber = Number(userInput);

  if (Number.isNaN(nextNumber)) {
    alert('"' + userInput + '" is not a number, it has been ignored');
    continue;
  }

  sum += nextNumber;
  inputCount++;
}

if (inputCount === 0) {
  alert('No numbers were entered.');
} else {
  const average = sum / inputCount;
  const averageMessage = 'The average of your numbers is: ' + average;
  alert(averageMessage);
}