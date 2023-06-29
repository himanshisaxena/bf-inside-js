/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */

export const typeOfValue = (value) => {
  let returned = String(typeof value);
  return returned;
};