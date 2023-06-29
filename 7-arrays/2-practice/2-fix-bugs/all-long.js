/**
 * Checks if all strings in an array have a length greater than or equal to a specified value.
 *
 * @param {string[]} strings - The array of strings to be checked.
 * @param {number} long - The minimum length required for a string to be considered long.
 *   Default value is 0.
 * @returns {boolean} `true` if all strings have a length greater than or equal to the specified
 *   value, `false` otherwise.
 */

export const allLong = (strings = [], long = 0) => {
  let allAre = true;
  for (let i = 0; i < strings.length; i++) {
    const next = strings[i];
    if (next.length < long) {
      allAre = false;
      break;
    }
  }
  return allAre;
};
