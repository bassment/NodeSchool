module.exports = function (str) {
  return /\b(dog|robot|cat)\d+$/.test(str);
};
