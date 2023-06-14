'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---

// Step 1: store temp's value for later
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');


// Step 2: assign b's value to a
a = b;
console.assert(a === 'w', 'Step 2.1');
console.assert(b === 'w', 'Step 2.2');

// Step 3: assign d's value to b
b = d;
console.assert(b === 'x', 'Step 3.1');
console.assert(d === 'x', 'Step 3.2');

// Step 4: assign c's value to d
d = c;
console.assert(d === 'z', 'Step 4.1');
console.assert(c === 'z', 'Step 4.2');

// Step 2: assign temp's value to c
c = temp;
console.assert(c === 'y', 'Step 5.1');
console.assert(temp === 'y', 'Step 5.2');

// --- test final values ---

console.assert(a === 'w', 'Test 1');

console.assert(b === 'x', 'Test 2');

console.assert(c === 'y', 'Test 3');

console.assert(d === 'z', 'Test 4');

console.assert(temp === 'y', 'Test 5');

console.log('-- end --');