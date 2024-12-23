const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrOfChars = str.split('');
  let res = [];
  let count = 1;
  for (let i = 0; i < arrOfChars.length; i++) {
    if (arrOfChars[i] === arrOfChars[i + 1]) {
      count += 1;
    } else {
      if (count !== 1) {
        res.push(count);
      }
      res.push(arrOfChars[i]);
      count = 1;
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
