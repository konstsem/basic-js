module.exports = function createDreamTeam(names) {
  if (!(names instanceof Array)) return false;
  if (names.length === 0) return new Error('The names are not given');
  return names.filter(item => typeof item === 'string').map(item => item.trim().toUpperCase()[0]).sort().join('');
  throw 'Not implemented';
  // remove line with error and write your code here
};
