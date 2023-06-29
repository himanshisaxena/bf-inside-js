import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skip } from './utils/skip.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  const skipSize = readNumber('skip-size');

  const userText = readString('user-text');

  const skipped = skip(skipSize, userText);

  display('skipped-output', skipped);
});