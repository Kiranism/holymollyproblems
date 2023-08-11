var binarySearch = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor(rightIndex + leftIndex);
    if (target === nums[middleIndex]) {
      return middleIndex;
    }
    if (target < nums[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
};

// console.log(binarySearch([1, 3, 5, 6], 5));

/* Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
 */
var searchInsert = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor(rightIndex + leftIndex / 2);
    if (target === nums[middleIndex]) {
      return middleIndex;
    }
    if (target < nums[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return leftIndex;
};

// console.log(searchInsert([1, 3, 5, 6], 2));

/* 
Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0] */

var moveZeroesWithSpace = function (nums) {
  let result = [];
  let countZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      result.push(nums[i]);
    } else {
      countZero++;
    }
  }
  for (let i = 0; i < countZero; i++) {
    result.push(0);
  }
  return result;
};
// console.log(moveZeroesWithSpace([0, 1, 0, 3, 12]));

var moveZeroes = function (nums) {
  let c = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[c], nums[i]] = [nums[i], nums[c]];
      c++;
    }
  }
  return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));

let a = 6;
let b = 7;
[b, a] = [a, b];
// console.log(a, b);

// check if pair with given sum is present
// [2,1,1,0] s=3

var binarySearc = function (arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
};

console.log("binary", binarySearc([-5, 2, 4, 6, 10], 6));

