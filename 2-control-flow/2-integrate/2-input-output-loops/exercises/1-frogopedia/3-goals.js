'use strict';

let userInput = '';
while (true) {
userInput = prompt('Tell me something about frogs');

/* -- BEGIN: validate input -- */
if (!userInput) {
alert('That is not something.');
continue; // Restart the loop to prompt for input again
}

if (/(frog|frogs)/i.test(userInput)) {
break; // Exit the loop if the input is about frogs
}

alert('Nope, not about frogs. Try again.');
/* -- END: validate input -- */
}

const finalMessage =
'I just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);