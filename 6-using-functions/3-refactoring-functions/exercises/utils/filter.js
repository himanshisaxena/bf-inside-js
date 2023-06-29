/**
 * Function which filtering characters
 *
 * @param { string } [toFilter = ''] - Input string
 * @param { string } [removeThese = ''] - Filtered string
 * @returns - Filtered String
 */
export const filter = (toFilter = '', removeThese = '') => {
  let filteredInput = '';
for (const character of toFilter) {
  const lowerCaseCharacter = character.toLowerCase();
  if (!removeThese.includes(lowerCaseCharacter)) {
    filteredInput += character;
  }
}
return filteredInput;
};