import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values

  const userText = readString('user-text');

  const numberOfTimes = readNumber('number-of-times');

  // repeat the string

  let repeatedOutput = '';
  for(let i = 0; i < numberOfTimes; i++){
    repeatedOutput += userText;
  }

  // display the repeated string

  display('repeated-output', repeatedOutput)
});