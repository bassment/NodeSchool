module.exports = function (str) {
  return /^(0x(\d|\w){2}\s+){8}$/.test(str);
};
