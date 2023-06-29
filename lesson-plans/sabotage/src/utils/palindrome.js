/**
 * check if a string is a palindrome
 *
 * @param {string} [toCheck=''] - string to check
 * @returns {boolean}  if a string is a palindrome or not
 */

export const isPalindrome = (toCheck = '') => {
  let reversed = '';
  for (const character of toCheck) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};