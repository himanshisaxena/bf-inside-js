'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);

let points = 0;

/* -- BEGIN: gather player 2's guesses) -- */
const guess1 = prompt('Player 2, enter the first phrase:');
const guess2 = prompt('Player 2, enter the second phrase:');
const guess3 = prompt('Player 2, enter the third phrase:');

if (guess1 === phrase1) {
  points++;
} else {
  alert('Wrong guess! Game over!');
  points = 0;
}

if (guess2 === phrase2) {
  points++;
} else {
  alert('Wrong guess! Game over!');
  points = 0;
}

if (guess3 === phrase3) {
  points++;
} else {
  alert('Wrong guess! Game over!');
  points = 0;
}
/* -- END: gather player 2's guesses -- */

alert(`Your score: ${points}`);
