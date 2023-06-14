'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'z';
let c = 'w';
let d = 'x';
let temp;

// --- swap values ---

// Step 1: store temp's value for later
temp = a;
console.assert(temp === 'y', 'Step 1.1');
console.assert(a === 'y', 'Step 1.2');

// Step 2: assign c's value to a
a = c;
console.assert(a === 'w', 'Step 2.1');
console.assert(c === 'w', 'Step 2.2');

// Step 3: assign temp's value to c
c = temp;
console.assert(c === 'y', 'Step 3.1');
console.assert(temp === 'y', 'Step 3.2');

// Step 4: assign b's value to temp
temp = b;
console.assert(temp === 'z', 'Step 4.1');
console.assert(b === 'z', 'Step 4.2');

// Step 5: assign d's value to b
b = d;
console.assert(b === 'x', 'Step 5.1');
console.assert(d === 'x', 'Step 5.2');

// Step 6: assign temp's value to d
d = temp;
console.assert(d === 'z', 'Step 6.1');
console.assert(temp === 'z', 'Step 6.2');


// --- test final values ---

const test1 = a === 'w';
console.assert(test1, 'Test 1');

const test2 = b === 'x';
console.assert(test2, 'Test 2');

const test3 = c === 'y';
console.assert(test3, 'Test 3');

const test4 = d === 'z';
console.assert(test4, 'Test 4');

const test5 = temp === 'z';
console.assert(test5, 'Test 5');

console.log('-- end --');