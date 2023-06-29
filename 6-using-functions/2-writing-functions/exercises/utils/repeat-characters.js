/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param { text } [text = ''] - A string to repeat each character.
 * @param { repeatition } [repeatition = 1] - How many times to repeat each character.
 * @returns { repeated } The original text with each character repeated.
 */
export const repeatCharacters = (text = '', repeatition = 1) => {
  let repeated = '';
  for (let i = 0; i < text.length; i++) {
    repeated += text[i].repeat(repeatition);
  }
  return repeated;
};