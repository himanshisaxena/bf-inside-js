export const repeatString = (text, repeatedTimes) => {
  let repeat = '';
  for(let i = 0; i < repeatedTimes; i++) {
    repeat += text;
  }
  return repeat;
}