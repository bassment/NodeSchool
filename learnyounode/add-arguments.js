var sum = process.argv.slice(2).reduce(function(prev, next) {
  return Number(prev) + Number(next);
});

console.log(sum);
