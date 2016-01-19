var HTTP = require('q-io/http');

HTTP.read('http://localhost:1337').then(function(json) {
  var result = JSON.parse(json);
  console.log(result);
})
.then(null, console.error)
.done();
