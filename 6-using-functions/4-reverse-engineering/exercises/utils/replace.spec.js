import { replaces } from '../replace.js'

describe('replace', () => {
  it('should replace all occurrences of the specified substring', () => {
    const str = 'Hello, Hello, Hello';
    const oldSubstring = 'Hello';
    const newSubstring = 'Hi';
    const expected = 'Hi, Hi, Hi';
    const result = replaces(str, oldSubstring, newSubstring);
    expect(result).toEqual(expected);
  });

  it('should handle an empty string', () => {
    const str = '';
    const oldSubstring = 'abc';
    const newSubstring = 'def';
    const expected = '';
    const result = replaces(str, oldSubstring, newSubstring);
    expect(result).toEqual(expected);
  });

  it('should handle a substring that does not exist in the string', () => {
    const str = 'Hello, World!';
    const oldSubstring = 'abc';
    const newSubstring = 'def';
    const expected = 'Hello, World!';
    const result = replaces(str, oldSubstring, newSubstring);
    expect(result).toEqual(expected);
  });

  it('should replace multiple occurrences of the specified substring', () => {
    const str = 'Hello, Hello, Hello';
    const oldSubstring = 'Hello';
    const newSubstring = 'Hi';
    const expected = 'Hi, Hi, Hi';
    const result = replaces(str, oldSubstring, newSubstring);
    expect(result).toEqual(expected);
  });
});