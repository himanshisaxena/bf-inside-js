let pyramidIt = '';
export const pyramid = (text) => {
  for (let i = 0; i < text.length; i++) {
    pyramidIt = pyramidIt + '\n';
    for (let j = i; j < text.length; j++) {
      pyramidIt = pyramidIt + text[j];
    }
  }
  return pyramidIt;
};