'use strict';

console.log('-- begin --');

/**
 * Determines if a text is long or short based on a cutoff length.
 *
 * @param {string} text - The text to evaluate.
 * @param {number} cutoff - The cutoff length to compare the text against.
 * @returns {string} - Returns 'short' if the text length is less than the cutoff, otherwise returns 'long'.
 */

const longOrShort = (text = '', cutoff = 0) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

// test the default parameters
const _5_expect = 'long';
const _5_actual = longOrShort('hello');
console.assert(_5_actual === _5_expect, 'Test 5: second default parameter');

const _6_expect = 'long';
const _6_actual = longOrShort();
console.assert(_6_actual === _6_expect, 'Test 6: both default parameters');

console.log('-- end --');