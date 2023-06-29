/**
 * Searches for strings that include the search query.
 * @param {string[]} strings - An array of strings to search.
 * @param {string} searchQuery - The search query.
 * @returns {string[]} - An array of strings that include the search query.
 */
export const search = (strings, searchQuery) => {
  return strings.filter((string) => string.includes(searchQuery));
};