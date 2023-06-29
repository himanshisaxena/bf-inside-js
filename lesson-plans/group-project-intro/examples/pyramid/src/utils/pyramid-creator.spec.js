import { pyramid } from './pyramid-creator.js';

describe('creating pyramid from some text', () => {
  describe('how the function create pyramid', () => {
    it('only letters', () => {
      const expected = 'hello\nello\nllo\nlo\no\n';
      const returned = pyramid('hello');
      expect(returned).toEqual(expected);
    });
    it('default parameter with empty string', () => {
      const expected = '';
      const returned = pyramid('');
      expect(returned).toEqual(expected);
    });
    it('only numbers', () => {
      const expected = '123456\n23456\n3456\n456\n56\n6\n';
      const returned = pyramid('123456');
      expect(returned).toEqual(expected);
    });
    it('special character', () => {
      const expected = '******\n*****\n****\n***\n**\n*\n';
      const returned = pyramid('******');
      expect(returned).toEqual(expected);
    });
  });
});