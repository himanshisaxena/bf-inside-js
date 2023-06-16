import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values

  const leftNumber = readNumber('left')

  const rightNumber = readNumber('right')

  // use a for loop to multiply the two numbers

  let multiply = '';
  for(let i = 0; i <= 10; i++) {
    const result = leftNumber * rightNumber;
    multiply = result;
  }

  // display the product

  display('product', multiply)
});