// Guess the output and explain why

// console.log("hello");

setTimeout(() => {
  // console.log("siuuu");
}, 0);

// Promise.resolve("world").then((res) => console.log(res));

// console.log("hi");

let arr = [1, 2, 3];
let copyarr = [...arr];
arr.push(4);
arr = [];
copyarr.push(5);
arr.push(6);
// console.log(arr, copyarr);

// Explanation:

// We wrap the setTimeout function in an immediately invoked function expression (IIFE) that takes the current value of i as a parameter.
// By passing i as a parameter to the IIFE, we create a new variable i that is scoped to the function, effectively capturing its value at each iteration of the loop.
// This way, when the setTimeout callback is executed, it references the correct value of i stored in the closure.
// The i * 1000 in the setTimeout represents the delay in milliseconds before each value of i is logged to the console.
// Finally, we invoke the a function to start the loop and execute the timeouts.
// When you run this modified code, it will output:

// Copy code
// 0
// 1
// 2
// Each number will be printed with a one-second delay between them due to the i * 1000 delay in the setTimeout function.

// function a() {
//   for (var i = 0; i < 3; i++) {
//     (function (i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }
// }

// a();

function plusMinus(arr) {
  // Write your code here
  let plus = 0;
  let minus = 0;
  let zero = 0;
  let len = arr.length;
  arr.forEach((item) => {
    if (item < 0) {
      minus++;
    } else if (item > 0) {
      plus++;
    } else zero++;
  });
  return `${(plus / len).toFixed(6)}\n${(minus / len).toFixed(6)}\n${(
    zero / len
  ).toFixed(6)}`;
}

// console.log(plusMinus([1, 2, 3, -1, -2, 0]));

function miniMaxSum(arr) {
  // Write your code here
  let min = arr[0],
    max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }
  let maxValue = sum - min;
  let minValue = sum - max;
  return console.log(maxValue, minValue);
}

// miniMaxSum([1, 2, 3, 5]);

function timeConversion(s) {
  // Write your code here
  let identifier = s.slice(8, 10);
  let revampedS = s.split(":")[0];

  if (identifier === "PM") {
    return revampedS === "12"
      ? s.replace(revampedS, "12").slice(0, 8)
      : s.replace(revampedS, +revampedS + 12).slice(0, 8);
  } else if (identifier === "AM" && revampedS === "12") {
    return s.replace(revampedS, "00").slice(0, 8);
  } else {
    return s.slice(0, 8);
  }
}

// console.log(timeConversion("12:45:54PM"));

const twoSum = (nums, target) => {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (storage[target - n] !== undefined) return [storage[target - n], i];
    storage[n] = i;
  }
};

// console.log(twoSum([1, 2, 4, 5, 3], 9));

const maxSlidingWindowNaive = function (nums, k) {
  const result = [];
  const n = nums.length;
  console.log(n);
  for (i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[j + i];
      }
    }
    result.push(max);
  }
  return result;
};

// console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 4));

const checkPanagram = function (s) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const test = [...alphabets];
  let result;
  for (let i = 0; i < s.length; i++) {
    if (test.includes(s[i])) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};
const word = "The quick brown fox jumps over a lazy dog.";
// console.log(checkPanagram(word));

const a = {};

a.you = "ehlelo";

// console.log(a);
