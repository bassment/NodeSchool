var q = require('q');
var def = q.defer();

function attachTitle(name) {
  var drName = 'DR. ' + name;
  return drName;
}

def.promise.then(attachTitle).then(console.log);

def.resolve('MANHATTAN');
