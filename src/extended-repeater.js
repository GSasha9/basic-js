const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) {
    str = 'null';
  }
  let addit = [];
  let result = [];
  if (options.hasOwnProperty('addition')) {
    let addition = options.addition;
    if (addition === null) {
      addition = 'null';
    } else {
      addition = options.addition;
    }
    let additionSeparator = options.additionSeparator || '|';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    for (let i = 0; i < additionRepeatTimes; i++) {
      addit.push(addition);
    }
    addit = addit.join(additionSeparator);
  }
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + addit);
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
