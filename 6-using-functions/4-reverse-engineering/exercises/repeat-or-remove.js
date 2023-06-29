/**
 * Repeats a string a specified number of times and removes a specified character from it.
 *
 * @param {string} str - The string to repeat and remove a character from.
 * @param {number} count - The number of times to repeat the string.
 * @param {string} charToRemove - The character to remove from the repeated string.
 * @returns {string} The resulting string after repeating and removing the character.
 */
export const repeatAndRemove = (str, count, charToRemove) => {
  const repeatedString = str.repeat(count);
  const stringWithoutChar = repeatedString.replace(new RegExp(charToRemove, 'g'), '');
  return stringWithoutChar;
};