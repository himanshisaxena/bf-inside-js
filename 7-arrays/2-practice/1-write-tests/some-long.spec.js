import { someLong } from './some-long.js';

describe('someLong: checks if any string in an array is long', () => {
  describe('checking if any string is long', () => {
    it('returns false if the array is empty', () => {
      const returned = someLong([], 3);
      expect(returned).toEqual(false);
    });

    it('returns true if at least one string is long enough', () => {
      const returned = someLong(['ab', 'abcd', 'abc', 'abcde', 'xyz'], 3);
      expect(returned).toEqual(true);
    });

    it('returns false if all strings are too short', () => {
      const returned = someLong(['abcde', 'abcd', 'abc', 'ab', 'xyz'], 10);
      expect(returned).toEqual(false);
    });

    it('returns true if all strings are exactly long', () => {
      const returned = someLong(['hyf', 'abc', 'xyz', 'pqr'], 3);
      expect(returned).toEqual(true);
    });

    it('returns true if all strings are very long', () => {
      const returned = someLong(
        [
          'hyfhyfhyfhyfhyfhyfhyfhyfhyf',
          'abcabcabcabcabcabcabcabc',
          'xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz',
        ],
        3,
      );
      expect(returned).toEqual(true);
    });
  });

  describe('there are no side-effects', () => {
    it('does not modify the array argument', () => {
      const arg = ['aa', 'bb', 'cc'];
      someLong(arg, 2);
      expect(arg).toEqual(['aa', 'bb', 'cc']);
    });
  });
});