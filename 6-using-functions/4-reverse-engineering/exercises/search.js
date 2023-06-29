/**
 * Finds all numbers in an array that are greater than a specified threshold.
 *
 * @param {number[]} arr - The array of numbers to search.
 * @param {number} threshold - The threshold value.
 * @returns {number[]} An array of numbers greater than the specified threshold.
 */
export const findNumbers = (arr, threshold) => {
  return arr.filter(number => number > threshold);
};