// Q1 Truncate the text

// Input: "Hello World" maxLength = 5;
// output: "Hello..."

// function truncate(s, max) {
//   if (s.length > max) {
//     return s.slice(0, max) + "...";
//   } else return s;
// }
// console.log(truncate("Hello world", 5));

// Palindrom Number
// 121 is true
// 10 is false;

function checkPalindrome(n) {
  let reverse = n.toString().split("").reverse().join("");
  return n < 0 ? false : n === +reverse;
}

// console.log(checkPalindrome(101));

// Q2 hamming distance
// x, y =>
// x = "hello" y="hwllr"
// output : 2
//     (hello)
//     (hwllr)

// function checkHamming(x, y) {
//   let difference = 0;
//   if (x.length !== y.length) {
//     return false;
//   }
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) {
//       difference++;
//     }
//   }
//   return difference;
// }

function checkHamming(x, y) {
  let difference = 0;
  x = x.toString(2);
  y = y.toString(2);
  if (x.length < y.length) {
    while (x.length !== y.length) {
      x = "0" + x;
    }
  } else {
    while (x.length !== y.length) {
      y = "0" + y;
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      difference++;
    }
  }
  return difference;
}

// console.log(checkHamming(1, 2));

/*
valid anagram
s="anagram" t="nagaram" true 
s= "rat" t ="car" false
*/

function isValidAnagram(x, y) {
  if (x.length !== y.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < x.length; i++) {
    obj1[x[i]] = (obj1[x[i]] || 0) + 1;
    obj2[y[i]] = (obj2[y[i]] || 0) + 1;
  }

  for (c in obj1) {
    if (obj1[c] !== obj2[c]) return false;
  }

  return true;
}

// console.log(isValidAnagram("car", "rtc"));

// found number of vowels in a given string

function findVowels(s) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }
  return count;
}
// console.log(findVowels("Hello Geeks"));

// Count Vowel Substrings of a String

// Input: word = "aeiouu"
// Output: 2
// Explanation: The vowel substrings of word are as follows (underlined):
// - "aeiouu"
//   - "aeiouu"

//   Input: word = "unicornarihan"
// Output: 0
// Explanation: Not all 5 vowels are present, so there are no vowel substrings.
//TODO: sliding window technique
var countVowelSubstrings = function (word) {
  if (word.length < 5) {
    return 0;
  }
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(vowels)) {
      count++;
    }
  }
  return count;
};
// console.log(countVowelSubstrings("aeiouu"));

// function reverseWordsTwo(word) {
//   return word.split(" ").reverse().join(" ");
// }

function reverseWordsTwo(word) {
  let wordArr = word.split(" ");
  console.log(wordArr);
  let string = "";
  for (let i = wordArr.length - 1; i >= 0; i--) {
    string += wordArr[i] + " ";
  }
  return string;
}

// console.log(reverseWordsTwo("Hello world"));

/* 
. Roman to Integer
Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];
    if (roman[curr] < roman[next]) {
      count -= roman[curr];
    } else {
      count += roman[curr];
    }
  }
  return count;
}
// console.log(romanToInt("III"));
// console.log(romanToInt("MCMXCIV"));
// console.log(romanToInt("LVIII"));

/* 
Longest Common Prefix
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function findLongestCommonPrefix(str) {
  let arr = str.sort();
  let left = arr[0];
  let right = arr[arr.length - 1];
  let index = 0;
  while (index < arr.length) {
    if (left[index] == right[index]) {
      index++;
    } else break;
  }
  return left.substring(0, index);
}

// console.log(findLongestCommonPrefix(["flower", "flow", "flight"]));
// console.log(findLongestCommonPrefix(["dog", "racecar", "car"]));

function checkIsAnagram(x, y) {
  if (x.length !== y.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < x.length; i++) {
    obj1[x[i]] = (obj1[x[i]] || 0) + 1;
    obj2[y[i]] = (obj2[y[i]] || 0) + 1;
  }
  for (s in obj1) {
    if (obj1[s] !== obj2[s]) {
      return false;
    }
  }
  return true;
}

// console.log(checkIsAnagram("geeksforgeeks", "forgeekgeeks"));

/* Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d */

var mergeAlternately = function (x, y) {
  let merged = "";
  let i = 0;
  let xl = x.length;
  let yl = y.length;
  let max = Math.max(x.length, y.length);
  while (i < max) {
    if (i < xl) {
      merged += x[i];
    }
    if (i < yl) {
      merged += y[i];
    }
    i++;
  }
  return merged;
};

// console.log(mergeAlternately("abc", "pqr"));
// console.log(mergeAlternately("ab", "pqrs"));
// console.log(mergeAlternately("abcd", "pq"));

/* xample 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false */

var checkIfPangram = function (s) {
  return new Set(s.split("")).size == 26;
};

console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz"));

console.log(checkIfPangram("leetcode"));

const a = "abc";
console.log("what", a.replace("a", ""));

/* Example 1:

Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111. */

var reverseBits = function (n) {
  let reN = n.toString(2).padStart(32, "0").split("").reverse().join("");
  return parseInt(reN, 2);
};
// console.log("op", reverseBits("00000010100101000001111010011100"));

/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

var climbStairs = function (n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
};

console.log("climbstairs", climbStairs(3));
console.log("climbstairs", climbStairs(1));
console.log("climbstairs", climbStairs(2));

function fibonacci(num) {
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log("fib", fibonacci(3));

/* 387. First Unique Character in a String
Easy
8.1K
260
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1 */

var firstUniqChar = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
  }
  // for (c in hash) {
  //   if (hash[c] === 1) return s.indexOf(c);
  // }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }
  return -1;
};

console.log("unique", firstUniqChar("loveleetcode"));

/* 171. Excel Sheet Column Number
Easy
4.4K
341
Companies
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnTitle = "A"
Output: 1
Example 2:

Input: columnTitle = "AB"
Output: 28
Example 3:

Input: columnTitle = "ZY"
Output: 701 */

var titleToNumber = function (columnTitle) {
  let result = 0;
  let length = columnTitle.length;
  for (let i = 0; i < length; i++) {
    result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, length - (i + 1));
  }
  return result;
};
// console.log("titleToNum", titleToNumber("AB"));

let char = "titleToNum";
// console.log("tit", Math.pow(2, 2));

//     Write a function called `countVowels` that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string. The function should be case-insensitive, meaning both uppercase and lowercase vowels should be counted.
// For example, if the input string is "Hello World", the function should return 3, since there are three vowels (e, o, o) in the string.
// You can assume that the input string only contains alphabetic characters (no numbers or special characters).

var countVowels = function (s) {
  const vowels = "aeiou";
  let count = 0;
  for (let letter of s.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log("countVowels", countVowels("Hello World"));

var nonRepeated = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
  }
  for (let c in hash) {
    if (hash[c] === 1) {
      return c;
    }
  }
  return null;
};

console.log("nonRep", nonRepeated("abacddce"));

var reversedStr = function (s) {
  let word = "";
  let reversed = "";
  for (let i = s.length - 1; i > 0; i--) {
    const n = s[i];
    if (n !== " ") {
      word += s[i];
    } else {
      reversed += word;
    }
  }
  return { word, reversed };
};

// console.log("reverse", reversedStr("Hello World"));

/* 3. Longest Substring Without Repeating Characters
Medium
36.3K
1.6K
Companies
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  */

var lengthOfLongestSubstring = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = true;
    if (hash[s[i]]) {
    }
  }
  return hash;
};

console.log("lenghtofLongst", lengthOfLongestSubstring("abcabcbb"));

// remove vowels from string

const removeVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      str += s[i];
    }
  }
  return str;
};
console.log("removeVowels", removeVowels("hello world"));

function alternateCap(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      str += s[i].toUpperCase();
    } else {
      str += s[i];
    }
  }
  return str;
}
console.log("alternate", alternateCap("frontend developer"));
