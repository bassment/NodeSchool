var http = require('q-io/http');

http.read({ method: 'GET', host: 'localhost', port: 7000 })
.then(function(buffer) {
  var id = buffer.toString();
  return id;
})
.then(function(id) {
  return http.read('http://localhost:7001/' + id);
})
.then(function(json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();
