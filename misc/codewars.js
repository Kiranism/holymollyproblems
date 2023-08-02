// 1.Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortedRes(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

function count(n) {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}

// console.log(count(5));

// console.log(sortedRes(["Glasses", "Monocles", "Telescopes", "Eyes"]));

function maxSubString(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    
  }
}

console.log(maxSubString("abcabcbb"));
