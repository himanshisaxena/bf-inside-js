import { findNumbers } from '../search.js'

describe('findNumbers', () => {
  it('should find numbers greater than the threshold', () => {
    const arr = [1, 5, 10, 15, 20];
    const threshold = 10;
    const expected = [15, 20];
    const result = findNumbers(arr, threshold);
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const threshold = 5;
    const expected = [];
    const result = findNumbers(arr, threshold);
    expect(result).toEqual(expected);
  });

  it('should handle no numbers greater than the threshold', () => {
    const arr = [1, 2, 3, 4, 5];
    const threshold = 10;
    const expected = [];
    const result = findNumbers(arr, threshold);
    expect(result).toEqual(expected);
  });

  it('should handle negative numbers and the threshold of 0', () => {
    const arr = [-5, 0, 5, 10, 15];
    const threshold = 0;
    const expected = [5, 10, 15];
    const result = findNumbers(arr, threshold);
    expect(result).toEqual(expected);
  });
});