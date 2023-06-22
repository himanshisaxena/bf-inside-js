'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */

const sumNumbers = (x = 0, y = 0) => {
  return x + y;
};

describe('sumNumbers', () => {
  describe('with positive numbers', () => {
    it('should return the correct sum', () => {
      const expected = 5;
      const actual = sumNumbers(2, 3);
      expect(actual).toEqual(expected);
    });
  });
  
  describe('with negative numbers', () => {
    it('should return the correct sum', () => {
      const expected = -5;
      const actual = sumNumbers(-2, -3);
      expect(actual).toEqual(expected);
    });
  });
  
  describe('with one missing operand', () => {
    it('should default missing operand to zero', () => {
      const expected = 10;
      const actual = sumNumbers(10);
      expect(actual).toEqual(expected);
    });
  });
});