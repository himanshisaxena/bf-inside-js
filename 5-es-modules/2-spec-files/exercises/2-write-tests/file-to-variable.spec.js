import { fileToVariable } from './file-to-variable.js';

describe('fileToVariable', () => {
  describe('change kebab-case file name', () => {
    it('fileToVariable', () => {
      const actual = fileToVariable('file-to-variable.js');
      const expected = 'fileToVariable';
      expect(actual).toEqual(expected);
    });
  });

  it('doMagic', () => {
    const actual = fileToVariable('do-magic.js');
    const expected = 'doMagic';
    expect(actual).toEqual(expected);
  });
});