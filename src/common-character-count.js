const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;
  let minLength;
  let maxLength;
  let maxArrLength = 0;
  if (arr1.length > arr2.length) {
    minLength = arr2;
    maxLength = arr1;
  } else {
    minLength = arr1;
    maxLength = arr2;
  }
  maxArrLength = maxLength.length;
  for (let i = 0; i < maxArrLength; i += 1) {
    if (maxLength.indexOf(minLength[i]) !== -1) {
      count += 1;
      maxLength.splice(maxLength.indexOf(minLength[i]), 1);
    } else {
      continue;
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
