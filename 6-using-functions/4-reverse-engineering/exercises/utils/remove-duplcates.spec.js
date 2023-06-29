import { removeDuplicates } from '../remove-duplicates.js'

describe('removeDuplicates', () => {
  it('should remove duplicate elements from the array', () => {
    const arr = [1, 2, 3, 2, 4, 1, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = removeDuplicates(arr);
    expect(result).toEqual(expected);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const expected = [];
    const result = removeDuplicates(arr);
    expect(result).toEqual(expected);
  });

  it('should handle an array with no duplicates', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = removeDuplicates(arr);
    expect(result).toEqual(expected);
  });

  it('should handle an array with all duplicates', () => {
    const arr = [1, 1, 1, 1, 1];
    const expected = [1];
    const result = removeDuplicates(arr);
    expect(result).toEqual(expected);
  });
});