import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatString } from './utils/repeat-string.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  const userText = readString('user-text');

  const numberOfTimes = readNumber('number-of-times');

  const repeated = repeatString(userText, numberOfTimes);

  display('repeated-output', repeated)
});