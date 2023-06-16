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

let points = 3;

const guess1 = prompt('Player 2, enter your guess for phrase 1:');
if (guess1 !== phrase1) {
  points = 0;
}

const guess2 = prompt('Player 2, enter your guess for phrase 2:');
if (guess2 !== phrase2) {
  points = 0;
}

const guess3 = prompt('Player 2, enter your guess for phrase 3:');
if (guess3 !== phrase3) {
  points = 0;
}

alert(`Your score: ${points}`);