'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'x';
let temp;

// --- swap values ---

// Step 1: store temp's value for later
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');

// Step 2: assign c's value to a

a = c;
console.assert(a === 'x', 'Step 2.1');
console.assert(c === 'x', 'Step 2.2');

// Step 3:  assign the saved temp value to c
c = temp;
console.assert(c === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');

// Step 4: assign c's value to temp
temp = c;
console.assert(temp === 'y', 'Step 4.1');
console.assert(c === 'y', 'Step 4.2');

// Step 5: assign b's value to c
c = b;
console.assert(c === 'z', 'Step 5.1');
console.assert(b === 'z', 'Step 5.2');

// Step 6: assign temp's value to b
b = temp;
console.assert(b === 'y', 'Step 6.1');
console.assert(temp === 'y', 'Step 6.2');

// --- test final values ---

console.assert(a === 'x', 'Test 1');

console.assert(b === 'y', 'Test 2');

console.assert(c === 'z', 'Test 3');

console.assert(temp === 'y', 'Test 4');

console.log('-- end --');