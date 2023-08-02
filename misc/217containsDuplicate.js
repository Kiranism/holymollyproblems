let nums = [1, 2, 3];

var containsDuplicate = function (nums) {
  let checkObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (checkObj[nums[i]]) {
      return true;
    } else {
      checkObj[nums[i]] = true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
