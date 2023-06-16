'use strict';

let userInput = '';
while (true) {
  userInput = prompt('Tell me something about frogs');

  if (!userInput) {
    alert('That is not something.');
    continue;
  }

  if (/(frog|frogs)/i.test(userInput)) {
    break;
  }

  alert('Nope, not about frogs. Try again.');
}

const finalMessage =
  'I just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);