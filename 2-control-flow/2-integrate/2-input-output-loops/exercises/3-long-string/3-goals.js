'use strict';

let userInput = '';
while (userInput === '') {
  userInput = prompt('Enter a value');

  /* -- BEGIN: validate input -- */
  if (userInput === '') {
    continue;
  }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);