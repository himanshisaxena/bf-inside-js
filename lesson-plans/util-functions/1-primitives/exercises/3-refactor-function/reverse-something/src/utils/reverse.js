/**
 * Checks if a string is reverse.

 * @param {string} [text = ''] - The string that might be a empty string.
 * @returns { string } - reversed word
 */

export const reverse = (text = '') => {
  let reversedWord = '';
  for (const char of text) {
    reversedWord = char + reversedWord;
  }
  return reversedWord;
};