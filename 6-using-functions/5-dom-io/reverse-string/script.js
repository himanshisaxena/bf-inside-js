import { readString, display } from '../../../lib/dom-io.js';

import { reverseString } from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  const userText = readString('user-text');

  const reversed = reverseString(userText);

  display('reversed-output', reversed);
});