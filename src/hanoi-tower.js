module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / (turnsSpeed / 3600));
  return ({ turns, seconds });
  // throw 'Not implemented';
    // remove line with error and write your code here
}
