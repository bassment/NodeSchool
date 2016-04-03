var marked = require('marked');
module.exports = function (str) {
  var newStr = marked(str);

  return newStr.replace(/@@(.+?)@@/g, '<blink>$1</blink>');
};
