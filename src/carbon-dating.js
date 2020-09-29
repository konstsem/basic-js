const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') return false;
  const N0 = parseFloat(sampleActivity);
  if (isNaN(N0) || N0 >= 15 || N0 <= 0) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / N0) / k);
  // throw 'Not implemented';
  // remove line with error and write your code here
};
