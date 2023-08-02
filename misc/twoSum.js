const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    console.log((storage[target - num] = index));
  }
};

twoSum([2, 7, 11, 15], 9);
