var q = require('q');
var def = q.defer();

def.promise.catch(function(error) {
  console.log(error.message);
});

setTimeout(def.reject, 300, new Error('REJECTED!'));
