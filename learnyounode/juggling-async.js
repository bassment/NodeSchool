var http = require('http');
var concat = require('concat-stream');
var urls = [];

for (var i = 2; i < 5; i++) {
  http.get(process.argv[i], function(response) {
    response.pipe(concat(function(err, data) {
      if (err) {
        return console.error(err);
      }
      console.log(data.toString());
    }));
  });
}

urls.forEach(function(item) {
  console.log(item);
});
