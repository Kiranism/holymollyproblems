/* 
1. Two sum 

arr = [2,7,11,15] target = 9; => [0,1]
arr = [3,2,4] target = 6 ; => [1,2]

*/

function findTwoSum(arr, target) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return -1;
}
// console.log(findTwoSum([2, 11, 7, 15], 9));

/* 
Sliding window maximum
*/

function maxSlidingWindowNaive(nums, k) {
  const result = [];
  const n = nums.length;
  for (let i = 0; i <= n - k; i++) {
    let max = nums[i];
    for (j = 1; j < 3; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    result.push(max);
  }
  return result;
}

// console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3));

function bestTimeToBuyStock(prices) {
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right <= prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(profit, max_profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
}
// console.log(bestTimeToBuyStock([7, 1, 5, 3, 6, 4]));

/* 
Contains Duplicate
Input: nums = [1,2,3,1]
Output: true
Input: nums = [1,2,3,4]
Output: false
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function checkDuplicate(arr) {
  let check = {};
  for (let i = 0; i < arr.length; i++) {
    if (check[arr[i]] !== undefined) {
      return true;
    } else {
      check[arr[i]] = true;
    }
  }
  return false;
}
// console.log(checkDuplicate([1, 2, 3, 1]));

/* 
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/

function maxSubArr(nums) {
  let sum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

// console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Brute Force Approach

// function maxSubArr(nums) {
//   let arr = Array.from(new Set(nums)).sort((a, b) => a - b);
//   if (arr.length > 2) {
//     return arr[arr.length - 2];
//   }
//   return -1;
// }
// console.log(maxSubArr([12, 35, 1, 10, 34, 1]));
// console.log(maxSubArr([10, 10]));

// let arr = [2, 34, 1];
// console.log(Math.max(...arr));

function missingNumber(array, n) {
  //code here
  let number = 0;
  let max = Math.max(...array);
  // console.log(max);
  for (let i = 1; i <= max; i++) {
    if (!array.includes(i)) {
      number = i;
    }
  }
  return number;
}

// console.log(missingNumber([1, 2, 3, 5], 5));

// maximum subarray

/* Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23. */

function findSubArray(arr) {
  let sum = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

// console.log(findSubArray([5, 4, -1, 7, 8]));

// [1,2] => [{1:1,2:2}]

// const modArr = (arr) => {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[i + 1] = arr[i];
//   }
//   return [obj];
// };

const modArr = (arr) => {
  return arr.map((el) => {
    return { [el]: el };
  });
};

console.log(modArr([1, 2]));
