const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let biggestNumber = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let workArr = Array.from( {length: arr.length}, (_, index) => arr[index] );
    workArr.splice(i, 1);
    if (workArr.join('') * 1 > biggestNumber) {
      biggestNumber = workArr.join('') * 1;
    } else {
      continue;
    }
  }
  return biggestNumber;
}

module.exports = {
  deleteDigit
};
