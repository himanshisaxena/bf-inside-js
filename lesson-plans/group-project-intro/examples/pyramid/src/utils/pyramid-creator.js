/**
 * this create pyramid from input
 * @param {string} [text] - string for make pyramid
 * @returns {string} pyramid from text
 */

export const pyramid = (text) => {
  let pyramided = '';
  for (let i = 0; i < text.length; i++) {
    let row = text.slice(i) + '\n';
    pyramided += row;
  }
  return pyramided;
};
console.log(pyramid ('hello'));
