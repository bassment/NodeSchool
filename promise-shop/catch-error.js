var q = require('q');
var def = q.defer();

function parsePromised(json) {
  try { JSON.parse(json); }
  catch (error) { error ? def.reject(error) : def.resolve; }
  finally { return def.promise; }
}

parsePromised(process.argv[2]).then(console.log).then(null, console.log);
