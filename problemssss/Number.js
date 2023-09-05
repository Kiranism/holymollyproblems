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

/* 1523. Count Odd Numbers in an Interval Range
Easy
2.6K
152
Companies
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9]. */

var countOdds = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      count++;
    }
  }
  return count;
};

console.log("countOdds", countOdds(8, 10));
console.log("countOdds", countOdds(3, 7));

var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  // return Number.isInteger(Math.sqrt(n));
  return Math.log2(n) % 1 === 0;
};

console.log("isPowerOf2", isPowerOfTwo(6));
console.log("isPowerOf2", isPowerOfTwo(1));
console.log("isPowerOf2", isPowerOfTwo(8));
console.log("isPowerOf2", isPowerOfTwo(16));
