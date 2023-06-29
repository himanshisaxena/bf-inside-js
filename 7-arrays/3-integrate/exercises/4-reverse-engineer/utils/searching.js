/**
 * Filters the elements in the array based on the given condition.
 * @param {Array} array - The array to filter.
 * @param {Function} condition - The condition function. Should return a boolean value.
 * @param {boolean} keepMatching - Determines whether to keep the matching elements (true) or remove them (false).
 * @returns {Array} - The filtered array.
 */
export const filterArray = (array, condition, keepMatching = true) => {
  if (keepMatching) {
    return array.filter(condition);
  } else {
    return array.filter((element) => !condition(element));
  }
};