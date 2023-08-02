var containsDuplicate = function (nums) {
  let check;
  let repeat = {};
  for (let i = 0; i < nums.length; i++) {
    if (repeat[nums[i]] > 0) {
      repeat[nums[i]] += 1;
    }
    repeat[nums[i]] = 1;
  }
  return repeat;
};

console.log(containsDuplicate([1, 2, 3, 1]));
