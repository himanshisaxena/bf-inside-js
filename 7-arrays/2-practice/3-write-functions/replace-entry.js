/**
 * Replaces a specific entry in an array with a new value.
 *
 * @param {Array} arr - The array in which the replacement will be made.
 * @param {number} index - The index of the entry to be replaced.
 * @param {*} value - The new value to be inserted at the specified index.
 * @returns {Array} A new array with the specified entry replaced by the new value.
 */
export const replaceEntry = (arr = [], index, value) => {
  if (index < 0 || index >= arr.length) {
    // Index is out of range, return the original array
    return arr.slice();
  }

  const replacedArray = [...arr];
  replacedArray[index] = value;
  return replacedArray;
};