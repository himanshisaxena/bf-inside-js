import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text

  const userText = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input

  let reversedOutput = '';
  for(let i = userText.length; i > 0; i--) {
    reversedOutput += userText[i - 1];
  }

  // display the reversed string

  display('reversed-output', reversedOutput);
});