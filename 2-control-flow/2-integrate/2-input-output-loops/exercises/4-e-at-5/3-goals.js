'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput.length < 5 || (userInput[4] !== 'e' && userInput[4] !== 'E')) {
    alert('input is invalid. Please try again.');
    continue;
  }
  validInput = userInput;
  isNotValid = false;
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');