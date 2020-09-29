const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument is not array');

  const isControl = value => value === '--discard-next' || value === '--discard-prev' || value === '--double-next' || value === '--double-prev';

  const compute = (acc, items) => {
    const [prev, current, next] = items;
    if (isControl(current) || prev === '--discard-next' || (next === '--discard-prev' && prev !== '--double-next')) return acc;
    if (prev === '--double-next' && next === '--double-prev') return [...acc, current, current, current];
    if ((prev === '--double-next' && next !=='--discard-prev') || next === '--double-prev') return [...acc, current, current];
    return [...acc, current];
  };

  return arr.reduce((a, item, index) => compute(a, [arr[index - 1], item, arr[index + 1]]), []);
};

// module.exports = function transform(/* arr */) {
// throw new CustomError('Not implemented');
  // remove line with error and write your code here
// };
