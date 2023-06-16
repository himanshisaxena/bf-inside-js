'use strict';

const userString = prompt('enter a number:');
const userNumber = Number(userString);

/* -- BEGIN: check if input is a number -- */
const inputIsANumber = !isNaN(userNumber);
/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const confirmMessage = confirm(
  'did you really enter a number?\n\n' + 'yes -> "ok"\n' + 'no  -> "cancel"',
);
const userThinksItsANumber = confirmMessage;
/* -- END -- */

const userIsCorrect = userThinksItsANumber === inputIsANumber;

if (userIsCorrect) {
  alert('correct!');
} else {
  alert('nope :(');
}