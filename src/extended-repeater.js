const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if(options.separator === undefined) {
    options.separator = '+';
  }
  if(options.addition === undefined) {
    options.addition = '';
  }
  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if(options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  const additionStr = (String(options.addition) + options.additionSeparator)
    .repeat(options.additionRepeatTimes - 1) + String(options.addition);

  const mainStr = String(str) + additionStr;

  const output = (mainStr + options.separator)
    .repeat(options.repeatTimes - 1) + mainStr;

  return output;
};
  