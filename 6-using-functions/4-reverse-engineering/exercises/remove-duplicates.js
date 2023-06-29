/**
 * Removes duplicate elements from an array.
 *
 * @param {number[]} [arr=[]] - The array from which duplicates should be removed.
 * @returns {number[]} A new array with duplicate elements removed.
 */
export const removeDuplicates = (arr = []) => {
  return [...new Set(arr)];
};