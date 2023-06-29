let reverse = '';
export const reverseString = (text) => {
  for (let i = text.length; i > 0; i--) {
    reverse += text[i - 1];
  }
  return reverse;
};