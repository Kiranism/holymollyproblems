// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false
// 121 => "121" => [1,2,1] = [1,2,1]
const isPalindrome = (num) => {
  return num > 0 ? num === +num.toString().split("").reverse().join("") : false;
};

const result = isPalindrome(11);
console.log(result);

var isPalindromePhrase = function (s) {
  return s.split("");
};

console.log(isPalindromePhrase("A man, a plan, a canal: Panama"));
