import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeatedText } from './utils/repeated.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  const userText = readString('user-text');

  const numberOfTimes = readNumber('number-of-times');

  const repeatedLetters = repeatedText(userText, numberOfTimes);

  display('repeated-output', repeatedLetters);
});