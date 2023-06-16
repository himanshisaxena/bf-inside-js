'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  userInput = prompt('Enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  /* -- BEGIN: validate input -- */
  if (!userInput) {
    alert('Nothing is not a name');
    continue;
  }
  isValidName = true; 
  /* -- END: validate input -- */
}

const finalMessage = `Your name is: "${userInput}"`;
alert(finalMessage);