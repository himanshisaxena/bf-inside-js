import { readNumber, display } from '../../../lib/dom-io.js';

import { multiplication } from './utils/multiplication.js'

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  const leftNumber = readNumber('left');

  const rightNumber = readNumber('right')

  const result = multiplication(leftNumber, rightNumber);
  
  display('product', result);
});