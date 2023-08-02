// fib(2) =[0,1]
// fib(7) =[0,1,1,2,3,5,8]

function fibonacci(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// const result = fibonacci(5);

function recursiveFib(num) {
  if (num <= 1) return num;
  return recursiveFib(num - 1) + recursiveFib(num - 2);
}

const result = recursiveFib(5);

console.log(result);

// Big-0 = 0(n) linear
