import { keepLongStrings } from './keep-long-strings.js';

describe('keepLongStrings: filters an array of strings based on length', () => {
  describe('keeping long strings', () => {
    it('returns an array with strings longer than the default length (5)', () => {
      const strings = ['apple', 'banana', 'carrot', 'date'];
      const result = keepLongStrings(strings);
      expect(result).toEqual(['banana', 'carrot']);
    });
  });

  describe('keeping long strings when no strings are long enough', () => {
    it('returns an empty array when the input array is empty', () => {
      const strings = [];
      const result = keepLongStrings(strings);
      expect(result).toEqual([]);
    });

    it('returns an empty array when no strings are longer than the specified length (10)', () => {
      const strings = ['apple', 'banana', 'carrot', 'date'];
      const result = keepLongStrings(strings, 10);
      expect(result).toEqual([]);
    });
  });

  describe('keeping long strings when all strings are long enough', () => {
    it('returns the original array when all strings are longer than the specified length (2)', () => {
      const strings = ['apple', 'banana', 'carrot', 'date'];
      const result = keepLongStrings(strings, 2);
      expect(result).toEqual(['apple', 'banana', 'carrot', 'date']);
    });
  });
});