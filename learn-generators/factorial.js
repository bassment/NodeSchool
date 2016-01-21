function *factorial(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
    yield factorial;
  }
}

for (n of factorial(5)) {
  console.log(n);
}
