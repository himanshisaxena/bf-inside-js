import { repeatAndRemove } from '../repeat-or-remove.js'

describe('repeatAndRemove', () => {
  it('should repeat the string and remove the specified character', () => {
    const str = 'Hello';
    const count = 3;
    const charToRemove = 'l';
    const expected = 'HeoHeoHeo';
    const result = repeatAndRemove(str, count, charToRemove);
    expect(result).toEqual(expected);
  });

  it('should handle an empty string', () => {
    const str = '';
    const count = 5;
    const charToRemove = 'x';
    const expected = '';
    const result = repeatAndRemove(str, count, charToRemove);
    expect(result).toEqual(expected);
  });

  it('should handle count of 0', () => {
    const str = 'Hello';
    const count = 0;
    const charToRemove = 'o';
    const expected = '';
    const result = repeatAndRemove(str, count, charToRemove);
    expect(result).toEqual(expected);
  });

  it('should handle removing a character that does not exist in the repeated string', () => {
    const str = 'Hello';
    const count = 2;
    const charToRemove = 'x';
    const expected = 'HelloHello';
    const result = repeatAndRemove(str, count, charToRemove);
    expect(result).toEqual(expected);
  });
});