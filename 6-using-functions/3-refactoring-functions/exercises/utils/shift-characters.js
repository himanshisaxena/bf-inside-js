/**
 * Shifts the characters in a given text by a specified amount.
 * 
 * @param {string} text - The text to be encoded.
 * @param {number} shift - The amount by which the characters should be shifted. Defaults to 0 if not provided.
 * @returns {string} - The encoded string where each character is shifted by the specified amount.
 */
export const shiftCharacters = (text = '', shift = 0) => {
    let encodedString = '';
  for (const character of text) {
    const characterCode = character.charCodeAt();
    const newCharCode = characterCode + shift;
    const encodedCharacter = String.fromCharCode(newCharCode);
    encodedString += encodedCharacter;
  }
  return encodedString;
};