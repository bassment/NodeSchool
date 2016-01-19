var q = require('q');
var def1 = q.defer();
var def2 = q.defer();

function resolvePromises(val1, val2) {
  def1.resolve(val1);
  def2.resolve(val2);
}

setTimeout(resolvePromises, 200, 'PROMISES', 'FTW');
q.all([def1.promise, def2.promise]).spread(function(val1, val2) {
  console.log([val1, val2]);
});
