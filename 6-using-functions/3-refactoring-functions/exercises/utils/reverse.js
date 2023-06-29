/**
 * function reversing text
 *
 * @param { string } [text = ''] - String input
 * @return { string } - return reversed text
 */
export const reverse = (text = '') => {
  let reversedWord = '';
  for (let i = 0; i < text.length; i++) {
    reversedWord = text[i] + reversedWord;
  }
  return reversedWord;
};