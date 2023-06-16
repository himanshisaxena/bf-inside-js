'use strict';

// fill in the blank to pass the assertion

const interactionValue = alert('Himanshi');

console.log(typeof interactionValue, interactionValue);

console.assert(
  typeof interactionValue === 'undefined',
  'interactionValue should be undefined',
);