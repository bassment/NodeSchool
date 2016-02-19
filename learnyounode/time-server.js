var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  var date = strftime("%F %H:%M\n", new Date());
  // var date = '';
  // var dateNow = new Date();
  // date += dateNow.getFullYear() +
  //   '-0' + (dateNow.getMonth() + 1) +
  //   '-' + dateNow.getDate() +
  //   ' ' + dateNow.getHours() +
  //   ':' + dateNow.getMinutes() +
  //   "\n";
  socket.end(date);
});

if (process.argv[2]) {
  server.listen(process.argv[2]);
}
