'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'z';
let b = 'x';
let c = 'y';
let temp;

// --- swap values ---

// Step 1: store temp's value for later
temp = a;
console.assert(temp === 'z', 'Step 1.1');
console.assert(c === 'z', 'Step 1.2');

// Step 2: assign c's value to a
a = c;
console.assert(a === 'y', 'Step 2.1');
console.assert(c === 'y', 'Step 2.2');

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
console.assert(c === 'x', 'Step 5.1');
console.assert(b === 'x', 'Step 5.2');

// Step 6: assign temp's value to b
b = temp;
console.assert(b === 'y', 'Step 6.1');
console.assert(temp === 'y', 'Step 6.2');

// --- test final values ---

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === 'z';
console.assert(test3, 'Test 3');

const test4 = temp === 'y';
console.assert(test4, 'Test 4');

console.log('-- end --');