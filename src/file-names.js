const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arrResult = [];
  names.forEach(function (el, index) {
    let count = 0;
    for (let i = 0; i < index; i += 1) {
      if (el === arrResult[i]) {
        count += 1;
      } else {
        continue;
      }
    }
      if (count !== 0) {
        for (i = 0; i < arrResult.length; i += 1) {
          if (el + `(${count})` === arrResult[i]) {
            count = arrResult[i].substring(arrResult[i].length - 2, arrResult[i].length - 1) * 1;
            count += 1;
          } else {
            continue;
          }
        }
        arrResult.push(el + `(${count})`);
      } else {
        arrResult.push(el);
      }
    }
  )
  return arrResult;
}

module.exports = {
  renameFiles
};
