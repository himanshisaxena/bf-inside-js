/**
 * Filters an array of strings and returns an array containing only the strings
 * that have a length greater than a specified value.
 *
 * @param {string[]} strings - The array of strings to be filtered.
 * @param {number} long - The minimum length required for a string to be included
 *   in the resulting array. Default value is 5.
 * @returns {string[]} An array of strings that are longer than the specified length.
 */
export const keepLongStrings = (strings = [], long = 5) => {
  const longStrings = [];
  for (const string of strings) {
    if (string.length > long) {
      longStrings.push(string);
    }
  }
  return longStrings;
};