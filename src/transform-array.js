const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let result = [];
  for (let ind = 0; ind < arr.length; ind += 1) {
    if (isNaN(arr[ind])) {
      if (arr[ind] === '--double-next') {
        if (ind < arr.length - 1) {
          result.push(arr[ind + 1]);
        }
      } else if (arr[ind] === '--double-prev') {
        if (ind > 0) {
          result.push(arr[ind - 1]);
        }
      } else if (arr[ind] === '--discard-next') {
        ind += 2;
      } else if (arr[ind] === '--discard-prev') {
        if (result.length > 0) {
          result.pop();
        }
      } else {
        result.push(arr[ind]);
      }
    } else {
      result.push(arr[ind]);
    }
  }
  return result;
}

module.exports = {
  transform
};
