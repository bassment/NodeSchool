var q = require('q');
var def = q.defer();

def.promise.then(console.log, console.log);

function resolveOrReject(res, rej) {
  def.resolve(res);
  def.reject(rej);
}

resolveOrReject('I FIRED', 'I DID NOT FIRE');
