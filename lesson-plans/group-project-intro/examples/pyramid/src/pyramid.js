import { readString, display } from '../../../../../lib/dom-io.js';

import { pyramid } from './utils/pyramid-creator.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger
  const text = readString('to-pyramid');

  const pyramided = pyramid(text);

  display('pyramided', pyramided);
});