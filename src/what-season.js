module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  const getSeason = (month) => {
    if (month > 1 && month < 5) return 'spring';
    if (month > 4 && month < 8) return 'summer';
    if (month > 7 && month < 11) return 'autumn';
    return 'winter';
  }
  return getSeason(date.getUTCMonth());
  throw 'Not implemented';
  // remove line with error and write your code here
};
