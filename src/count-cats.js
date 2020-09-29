module.exports = function countCats(/* matrix */) {
  const isCat = (item) => item === '^^';
  const reducer = (arr, acc) => arr.reduce((a, item) => {
    if (item instanceof Array) return reducer(item, a);
    return isCat(item) ? a + 1 : a;
  }, acc);
  return reducer([...arguments], 0);
  // throw 'Not implemented';
  // remove line with error and write your code here
};
