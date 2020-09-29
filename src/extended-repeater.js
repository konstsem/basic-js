module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const addition = function(value) {
    switch (typeof value) {
      case('object'):
        return value !== null ? value.toString() : 'null';
        break;
      case('boolean'):
        return value;
        break;
      default:
        return value || '';
    }
  }(options.addition);
  const additionSeparator = String(options.additionSeparator) || '|';
  const additionalString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str).map(item => `${item}${additionalString}`).join(separator);
};
