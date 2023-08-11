// given an arr of n elem and a target ele this, find the index of t in the arr. Return -1 if the target ele is not found

var linearSearch = function (arr, t) {
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n === t) {
      return i;
    }
  }
  return -1;
};

// console.log(linearSearch([-5, 2, 10, 4, 6], 10));

function employeeRating(N, workLoad) {
  let count = 0;
  let max = 0;
  // Write your code here
  for (let i = 0; i < N; i++) {
    const c = workLoad[i];
    if (c > 6) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
}

console.log(employeeRating(7, [3, 7, 8, 12, 4, 9, 8]));
