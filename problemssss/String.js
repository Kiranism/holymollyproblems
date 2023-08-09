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
