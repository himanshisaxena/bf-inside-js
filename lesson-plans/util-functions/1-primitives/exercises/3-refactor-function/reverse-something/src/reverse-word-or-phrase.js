import {
  readString,
  readSelection,
  display,
} from '../../../../../../../lib/dom-io.js';

import { reverse } from './utils/reverse.js';

const reverseWordOrPhrase = () => {
  debugger;

  // --- read user input ---
  const userText = readString('user-text');
  const reverseType = readSelection('reverse-type');

  // --- reverse either the whole thing or each word ---
  let reversed = '';
  if (reverseType === 'each') {
    const splitText = userText.split(' ');
    const newWords = [];

    for (const word of splitText) {
      /// BEGIN: refactor this to call `reverse`
      const reversedWord = reverse(word);
      /// END: refactor

      newWords.push(reversedWord);
    }

    reversed = newWords.join(' ');
  } else {
    /// BEGIN: refactor this to call `reverse`
    reversed = reverse(userText);
    /// END: refactor
  }

  // --- display the reversed input ---
  display('reversed-output', reversed);
};

document.getElementById('do-it').addEventListener('click', reverseWordOrPhrase);