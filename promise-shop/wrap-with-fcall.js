var q = require('q');
var def = q.defer();

q.fcall(JSON.parse, process.argv[2])
.then(null, console.log);
