'use strict';

/* look out for:

  - an incorrect way to check for NaN
  - incorrect interaction function
  - comparison vs. assignment

*/

const userString = prompt('enter a number:');
const userNumber = Number(userString);

let inputIsANumber = !isNaN(userNumber);

const confirmMessage =
  confirm('did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"');
let userThinksItsANumber = confirmMessage;

let userIsCorrect = userThinksItsANumber === inputIsANumber;

alert(userIsCorrect ? 'correct!' : 'nope :(');