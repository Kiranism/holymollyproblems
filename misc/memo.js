const fib = function (n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};
console.time("fib");
console.log("fib", fib(5));
console.timeLog("fib");
