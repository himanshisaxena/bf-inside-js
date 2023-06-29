/**
 * Makes all long strings in an array upper case.
 *
 * @param {Array} strings - The array of strings to process.
 * @param {number} long - The minimum length threshold for strings to be considered "long".
 * @returns {Array} A new array with long strings converted to upper case.
 */
export const longToUpper = (strings = [], long = 0) => {
  const processedStrings = [];
  for (const string of strings) {
    if (string.length >= long) {
      processedStrings.push(string.toUpperCase());
    } else {
      processedStrings.push(string);
    }
  }
  return processedStrings;
};