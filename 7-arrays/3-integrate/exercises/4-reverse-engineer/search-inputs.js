// ===== import functions =====

import { filterArray } from './utils/searching.js';

// ===== main program (use functions) =====

alert(
  `Enter as many texts as you want.

When you're done entering texts, press cancel.
-> Only texts that include the search query will be kept.`,
);

// -- gather strings --
const strings = [];
while (true) {
  const input = prompt('Enter something or click "Cancel" to finish');

  if (input === null) {
    break;
  } else if (input === '') {
    alert('Nothing is not allowed');
    continue;
  }

  strings.push(input);
}
console.log(strings);

// -- get search query --
let query = null;
while (query === null || query === '') {
  query = prompt('Enter a search query');
}
console.log(query);

// -- keep or remove strings based on the search query --
const filteredStrings = filterArray(strings, (string) => string.includes(query), true);
console.log(filteredStrings);

// -- build the final message --
const message = `Query: ${query}

Matches:
- ${filteredStrings.join('\n- ')}`;

// -- alert the final message --
alert(message);