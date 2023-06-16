import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values

  const skipSize = readNumber('skip-size');

  const userText = readString('user-text');

  // create a new string with skipped characters

  let skippedOutput = '';
  for(let i = 0; i < userText.length; i += skipSize) {
    skippedOutput += userText[i];
  }

  // display the skipped string

  display('skipped-output', skippedOutput);
});