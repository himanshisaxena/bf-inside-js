'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'x';
let temp;

// --- swap values ---

// Step 1: store a's value for later
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');

// Step 2: assigning b's value to a
a = b;
console.assert(a === 'x', 'Step 2.1');
console.assert(b === 'x', 'Step 2.2');

// Step 3: assigning the saved value to b
b = temp;
console.assert(b === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');


// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = temp === 'y';
console.assert(test3, 'Test 3');

console.log('-- end --');