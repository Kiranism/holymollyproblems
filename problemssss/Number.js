// Palindrome Number
// x = 121 => op: true
// x = 10 => op: false

const checkPalindromee = function (n) {
  return n === +n.toString().split("").reverse().join("");
};

console.log("checkPalin", checkPalindromee(121));
console.log("checkPalin", checkPalindromee(10));

// Fibonacci Number
/* F(0) = 0, F(1) = 1
n = 3 => op : 2  */

// 0,1,1,2,3,5,8

var findFib = function (num) {
  const fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
};
console.log("findFib", findFib(3));
