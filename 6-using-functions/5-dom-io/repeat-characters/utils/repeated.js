export const repeatedText = (userText, numberOfTimes) => {
let repeated = '';
  for (let i = 0; i < userText.length; i++) {
    for(let j = 0;j < numberOfTimes; j++ ) {
      repeated += userText[i];
    }
  }
      return repeated;
}