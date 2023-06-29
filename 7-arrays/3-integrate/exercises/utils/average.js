/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} - The sum of the numbers.
 */
export const calculateSum = (numbers) => {
  return numbers.reduce((sum, number) => sum + number, 0);
};