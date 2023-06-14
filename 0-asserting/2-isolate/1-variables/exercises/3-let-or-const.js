'use strict';

console.log('-- begin --');

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

let aTree;
console.log(aTree); // should log undefined

// assign the value "birch" to the variable aTree
aTree = 'birch';
console.log(aTree); // should log "birch"

// declare a variable named turtle and assign it the name "myrtle"
const turtle = 'myrtle';
console.log(turtle); // should log "myrtle"

// reassign aTree to "aspen"
aTree = 'aspen';
console.log(aTree); // should log "aspen"

// declare a variable named aColor with the value "blue"
let aColor = 'blue';
console.log(aColor); // should log "blue"

// log the value of turtle
console.log(turtle); // should log "myrtle"

// reassign aTree to "oak"
aTree = 'oak';
console.log(aTree); // should log "oak"

// reassign aColor to "orange"
aColor = 'orange';
console.log(aColor); // should log "orange"


console.log('-- end --');