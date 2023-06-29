let skipLetters = '';
export const skip = (skipSize, text) => {
  for (let i = 0; i < text.length; i += skipSize) {
    skipLetters += text[i];
  }
  return skipLetters;
};