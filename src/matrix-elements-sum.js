const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0;
  for(let ind = 0; ind < matrix[0].length; ind += 1) {
    let flag = false;
    matrix.forEach((el) => {
      if(el[ind] === 0) {
        flag = true;
      }
      if(!flag) {
        count += el[ind];
      }
    })
  }
  return count;
}

module.exports = {
  getMatrixElementsSum
};
