import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
let num = readNumber('number-of-times');
let text = readString ('user-text');
  // repeat the string
let repeatChar = '';

  for (let j = 0; j < num; j++) {
     repeatChar += text;
  
}
  // display the repeated string
  display ('repeated-output', repeatChar);
});


