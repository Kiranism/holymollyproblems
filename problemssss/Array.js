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

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0, 0, 9, 0, 0];

// function productExceptSelf(nums) {
//   const n = nums.length;
//   const ans = new Array(n);

//   for (let i = 0; i < n; i++) {
//     let pro = 1;
//     for (let j = 0; j < n; j++) {
//       if (i === j) continue;
//       pro *= nums[j];
//     }
//     ans[i] = pro === 0 ? 0 : pro;
//   }

//   return ans;
// }

function productExceptSelf(nums) {
  const n = nums.length;
  const ans = new Array(n);
}
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));

console.log(5 / 2, 5 % 2);

var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }

  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;
};

/* Example 1:

Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.
Example 2:

Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15. */

// function subarraySum(arr, n, s) {
//   let start = 0;
//   let end = 0;
//   let sum = 0;
//   while (end <= n) {
//     if (sum === s) {
//       return [start + 1, end];
//     }
//     if (sum < s) {
//       if (end < n) {
//         sum += arr[end];
//         end++;
//       } else {
//         break;
//       }
//     } else {
//       sum -= arr[start];
//       start++;
//     }
//   }
// }

function subarraySum(arr, n, s) {
  let start = 0;
  let end = 0;
  let sum = arr[0];
  if (sum === s) {
    return [1, 1];
  }
  while (end < n - 1) {
    if (sum + arr[end + 1] <= s) {
      sum = sum + arr[end + 1];
      end++;
    } else {
      sum = sum - arr[start];
      start++;
    }
    if (sum === s) {
      return [start + 1, end + 1];
    }
  }
  return -1;
}

console.log(subarraySum([1, 2, 3, 7, 5], 5, 12));
console.log(subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15));

// function subArraySum2(arr, n, sum) {
//   // Pick a starting point
//   for (let i = 0; i < n; i++) {
//     let currentSum = arr[i];

//     if (currentSum == sum) {
//       console.log("Sum found at indexes " + i);
//       return;
//     } else {
//       // Try all subarrays starting with 'i'
//       for (let j = i + 1; j < n; j++) {
//         currentSum += arr[j];

//         if (currentSum == sum) {
//           console.log("Sum found between indexes " + i + " and " + j);
//           return;
//         }
//       }
//     }
//   }
//   console.log("No subarray found");
//   return;
// }

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
// subArraySum(arr, n, sum);

// This code is contributed by garg28harsh.

var singleNumber = function (nums) {
  let hash = {};
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    hash[nums[i]] = (hash[nums[i]] || 0) + 1;
  }
  for (c in hash) {
    if (hash[c] === 1) {
      return +c;
    }
  }
  // return hash;
};

// console.log(singleNumber([2, 2, 1]));

// console.log(singleNumber([4, 1, 2, 1, 2]));

var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }
  return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1]));

/* Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums. */

/* 169. Majority Element
Easy
16.3K
470
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

// var majorityElement = function (nums) {
//   let obj = {};
//   let max = 0;
//   let key = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     obj[n] = (obj[n] || 0) + 1;
//   }
//   console.log("obj", obj);
//   for (c in obj) {
//     console.log("c", c);
//     if (obj[c] > max) {
//       max = obj[c];
//       key = c;
//     }
//   }
//   return key;
// };

var majorityElement = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    obj[n] = (obj[n] || 0) + 1;
    if (obj[n] > nums.length / 2) return n;
  }
};
// console.log("majority", majorityElement([3, 2, 3]));

/* 412. Fizz Buzz
Easy
2.2K
295
Companies
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] */
var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        arr.push("FizzBuzz");
        break;
      case i % 3 === 0:
        arr.push("Fizz");
        break;
      case i % 5 === 0:
        arr.push("Buzz");
        break;
      default:
        arr.push(`${i}`);
        break;
    }
  }
  return arr;
};

// console.log("fizzbuzz", fizzBuzz(15));

var sortArr = function (arr) {
  let count1 = 0,
    count2 = 0,
    count3 = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n === 0) count1++;
    if (n === 1) count2++;
    if (n === 2) count3++;
  }
  for (let i = 0; i < count1; i++) {
    arr[i] = 0;
  }
  for (let i = count1; i < count1 + count2; i++) {
    arr[i] = 1;
  }
  for (let i = count1 + count2; i < arr.length; i++) {
    arr[i] = 2;
  }
  return arr;
};
console.log("sortArr", sortArr([0, 1, 2, 0, 1, 2]));

/* Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1.The 0 is only there to ensure the merge result can fit in nums1.
 */

var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

console.log("merge", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

function foo1() {
  return {
    bar: "yo",
  };
}
function foo2() {
  return {
    bar: "habeebi",
  };
}

console.log("fool", foo1());
console.log("fool", foo2());

// faking constistency

// SORT THIS [1,2,0,2,2,1] AS [0,1,1,2,2]

var sortZero = function (nums) {
  let zeros = 0,
    ones = 0,
    twos = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    }
    if (nums[i] === 1) {
      ones++;
    }
    if (nums[i] === 2) {
      twos++;
    }
  }

  for (let i = 0; i < zeros; i++) {
    result[i] = 0;
  }

  for (let i = zeros; i < zeros + ones; i++) {
    result[i] = 1;
  }
  for (let i = zeros + ones; i < zeros + ones + twos; i++) {
    result[i] = 2;
  }

  return { zeros, ones, twos, result };
};

console.log("sort", sortZero([1, 2, 0, 2, 2, 1]));

// You are asked to generate a list of integers and their associate squares (that is the integer to the power of 2) where the square does not exceed a given number.  As an example if given the number 50, the highest square value to be output would be 49.  What steps are needed for this programming snippet to produce the correct output?

//   You have been asked to create a random password generator.The password generator must ask the user for the desired length of the password(minimum four characters).Each password must have at least one digit excluding zero and one(2 - 9), at least one lowercase letter other than a lower case L, at least one uppercase letter other than O and at least one of these characters between the brackets(!@#$ %^&*).What steps would you follow to produce a valid password ?

//   var cars=2;
//   do{
//     cars/=2;
//   }while(cars<1);
//   console.log("Number of cars: " + cars);

//   What would the console.log output?

// pivot in array
/* 1 4 2 5 0
op 2

2 3 4 1 4 5
op 1  */

// var pivot = function (nums) {
//   const total = nums.reduce((prev, curr) => prev + curr, 0);
//   let leftSum = 0;
//   for (let i = 0; i < nums.legnth; i++) {
//     let rightSum = total - nums[i] - leftSum;
//     if (leftSum === rightSum) {
//       return i;
//     }
//     leftSum += nums[i];
//   }
//   return -1;
// };

var pivot = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = 0,
      right = 0;

    for (let j = 0; j < i; j++) {
      left += nums[j];
    }
    for (let k = i + 1; k < nums.length; k++) {
      right += nums[k];
    }
    if (left == right) return i;
  }
  return -1;
};
console.log("pivot", pivot([1, 4, 2, 5, 0]));

var majorityElement = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    obj[n] = (obj[n] || 0) + 1;
    if (obj[n] > nums.length / 2) return n;
  }
};

/* Example 1:

26. Remove Duplicates from Sorted Array
Easy


Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores). */

var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    const n = nums[j];
    if (nums[i] !== nums[j]) {
      nums[i] = n;
      i++;
    }
  }
  return i + 1;
};

console.log("removeDup", removeDuplicates([1, 1, 2]));

// clown push. some more changes i n draw x

/* 
485. Max Consecutive Ones
Easy
5K
442
Companies
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2 */

var findMaxConsecutiveOnes = function (nums) {
  let currentPoint = 0;
  let maxPoint = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentPoint++;
      maxPoint = Math.max(maxPoint, currentPoint);
    } else {
      currentPoint = 0;
    }
  }
  return maxPoint;
};

console.log("findMaxCons", findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log("findMaxCons", findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

/* Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] */

var sortedSquares = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i] * nums[i];
    res.push(n);
  }
  return res.sort((a, b) => a - b);
};

console.log("sortedsquare", sortedSquares([-4, -1, 0, 3, 10]));

// [2,0,4,0,5]
var moveZeros = function (nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[c], nums[i]] = [nums[i], nums[c]];
      c++;
    }
  }
  return nums;
};
console.log("moveZeros", moveZeros([2, 0, 4, 0, 5]));
