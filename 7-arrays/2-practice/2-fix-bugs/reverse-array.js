/**
 * Reverses the elements in an array.
 *
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} A new array with the elements reversed.
 */
export const reverseArray = (arr = []) => {
  const reversed = arr.slice().reverse();
  return reversed;
};