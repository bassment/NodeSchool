var fs = require('fs');

var buf = fs.readFileSync(process.argv[2], 'utf-8');

var lines = buf.split("\n").length - 1;
console.log(lines);
