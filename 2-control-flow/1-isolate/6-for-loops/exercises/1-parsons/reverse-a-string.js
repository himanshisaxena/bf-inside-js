// #todo


/*
  create a loop that will log the letters in reverse order
*/


let before = 'toadstools';
let after = '';

for (let i = before.length - 1; i >= 0; i--) {
  let nextLetter = before[i];
  after = after + nextLetter;
}