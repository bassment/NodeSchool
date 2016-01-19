var q = require('q');
var def1 = q.defer();
var def2 = q.defer();

function all(prom1, prom2) {
  var def = q.defer();
  var counter = 0;
  prom1
    .then(function(result) {
      val1 = result;
      ++counter;
      if (counter >= 2) def.resolve([val1, val2]);
    })
    .then(null, def.reject)
    .done();

  prom2
    .then(function(result) {
      val2 = result;
      ++counter;
      if (counter >= 2) def.resolve([val1, val2]);
    })
    .then(null, def.reject)
    .done();

  return def.promise;
}

function resolvePromises(val1, val2) {
  def1.resolve(val1);
  def2.resolve(val2);
}

setTimeout(resolvePromises, 200, 'PROMISES', 'FTW');
all(def1.promise, def2.promise).then(console.log);
