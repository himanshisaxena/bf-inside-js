import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  let text = readString('user-text');
  let num = readNumber('number-of-times');

  // repeat the characters in the text
  let repeatChar = '';
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < num; j++) {
      repeatChar += text[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', repeatChar);
});
