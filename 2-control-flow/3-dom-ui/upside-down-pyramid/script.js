import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text

  const toPyramid = readString('to-pyramid');

  // create the pyramid

  let pyramided = '';

  for (let i = 0; i < toPyramid.length; i++) {
    for (let j = i; j < toPyramid.length; j++) {
      pyramided += toPyramid[j];
    }
    pyramided += '\n';
  }

  // display the pyramid

  display('pyramided', pyramided);
});