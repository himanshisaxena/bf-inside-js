'use strict';

const userString = prompt('enter a number:');
const userNumber = Number(userString);

const inputIsANumber = !isNaN(userNumber);

const confirmMessage = confirm(
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"',
);
const userThinksItsANumber = confirmMessage;

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}