

// ===== import functions =====

import { filterArray } from './utils/filter.js';

// ===== main program (use functions) =====

alert(
  `Enter as many words as you want.

When you're done entering words, press cancel.
-> Words that match the condition will be kept or removed.`,
);

// -- gather user input --
const words = [];
while (true) {
  const input = prompt('Enter the next word or cancel to finish');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('Nothing is not allowed');
    continue;
  }

  words.push(input);
}
console.log(words);

// -- determine the filtering condition --
let keepMatching = null;
while (keepMatching === null) {
  const choice = prompt('Do you want to keep matching words? (yes/no)');
  if (choice === 'yes') {
    keepMatching = true;
  } else if (choice === 'no') {
    keepMatching = false;
  }
}
console.log(keepMatching);

// -- filter the words based on the condition --
const filteredWords = filterArray(words, (word) => word.length > 5, keepMatching);
console.log(filteredWords);

// -- build the final message --
const action = keepMatching ? 'kept' : 'removed';
const message = `Words that match the condition have been ${action}:
- ${filteredWords.join('\n- ')}`;

// -- alert the final message --
alert(message);