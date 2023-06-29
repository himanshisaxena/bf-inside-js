import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    it('"milena" should return "ihsnamih"', () => {
      expect(reverseAString('himanshi')).toEqual('ihsnamih');
    });
    it('"zahira" should return "arihaz"', () => {
      expect(reverseAString('zahira')).toEqual('arihaz');
    });
    it('"malik" should return "kilam"', () => {
      expect(reverseAString('malik')).toEqual('kilam');
    });
    it('"jean" should return "naej"', () => {
      expect(reverseAString('jean')).toEqual('naej');
    });
    it('"paul" should return "luap"', () => {
      expect(reverseAString('paul')).toEqual('luap');
    });
    // write at least 5 more tests
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual('text is not a string');
    });
    it('when the type of text is not a string', () => {
      expect(reverseAString(typeof text === false)).toEqual(
        'text is not a string',
      );
    });
    it('when the type of text its not a string', () => {
      expect(reverseAString(typeof text === NaN)).toEqual(
        'text is not a string',
      );
    });
    // write at least 3 more tests
  });
});