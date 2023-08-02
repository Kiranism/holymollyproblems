// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function subArrSum(num) {
//   let maxSum = num[0];

//   for (let i = 0; i < num.length; i++) {
//     let currentSum = 0;
//     for (let j = i; j < num.length; j++) {
//       currentSum = currentSum + num[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     }
//   }
//   return maxSum;
// }

// console.log(subArrSum([1, 2]));

// kadane's algo

function maxSubArr(nums) {
  let sum = 0;
  let maxSum = [nums[0]];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubArr([1, 2]));
