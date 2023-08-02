// Write a function called `reverseWords` that takes a sentence as input and returns a new sentence where the order of the words is reversed.
// For example, if the input sentence is "Hello World", the function should return "World Hello".
// You can try with predefined functions first and then without using it.

// function reverseWords(s) {
//   let reverseString = s.split(" ").reverse().join(" ");
//   console.log(reverseString);
// }

function reverseWordsTwo(s) {
  let arr = [];
  let resultString = "";
  let finalString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      resultString += s[i];
    } else {
      finalString = resultString;
    }
    return finalString;
  }
}

// console.log(reverseWordsreverseWordsTwo;
// console.log(reverseWordsTwo("Hello World"));

// [15:31] Praveen S
//     Write a function called `countVowels` that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string. The function should be case-insensitive, meaning both uppercase and lowercase vowels should be counted.
// For example, if the input string is "Hello World", the function should return 3, since there are three vowels (e, o, o) in the string.
// You can assume that the input string only contains alphabetic characters (no numbers or special characters).

function countVowels(s) {
  const arrOfVowels = ["a", "e", "i", "o", "u"];
  // let result = [];
  let count = 0;
  //   console.log(s[1]);
  for (let i = 0; i < s.length; i++) {
    if (arrOfVowels.includes(s[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("HAello World"));
