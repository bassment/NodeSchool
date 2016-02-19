var fs = require('fs');
var path = require('path');

function mymodule(folder, ext, callback) {
  fs.readdir(folder, function cb(err, files) {
    if (err) {
      return callback(err);
    }
    var list = files.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });
    callback(null, list);
  });
};

module.exports = mymodule;
