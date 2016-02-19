var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
  var urlData = url.parse(req.url, true);
  var isoTime = new Date(urlData.query.iso);

  if (req.method === 'GET' && urlData.pathname === '/api/parsetime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({
      hour: isoTime.getHours(),
      minute: isoTime.getMinutes(),
      second: isoTime.getSeconds()
    });
    res.end(json);
  }

  if (req.method === 'GET' && urlData.pathname === '/api/unixtime') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({
      unixtime: isoTime.getTime()
    });
    res.end(json);
  }
});
server.listen(process.argv[2]);
