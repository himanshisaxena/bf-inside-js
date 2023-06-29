/**
 * Checks if any string in an array has a length greater than or equal to a specified value.
 *
 * @param {string[]} strings - The array of strings to be checked.
 * @param {number} long - The minimum length required for a string to be considered long.
 *   Default value is 5.
 * @returns {boolean} `true` if at least one string has a length greater than or equal to the
 *   specified value, `false` otherwise.
 */

export const someLong = (strings = [], long = 5) => {
  let someAreLong = false;
  for (const string of strings) {
    if (string.length >= long) {
      someAreLong = true;
      break;
    }
  }
  return someAreLong;
};