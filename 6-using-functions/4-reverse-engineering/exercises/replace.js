/**
 * Replaces all occurrences of a specified substring in a string with a new substring.
 *
 * @param {string} str - The original string.
 * @param {string} oldSubstring - The substring to be replaced.
 * @param {string} newSubstring - The new substring to replace the old substring with.
 * @returns {string} The resulting string after replacing all occurrences of the old substring with the new substring.
 */
export const replaces = (str, oldSubstring, newSubstring) => {
  return str.replace(new RegExp(oldSubstring, 'g'), newSubstring);
};