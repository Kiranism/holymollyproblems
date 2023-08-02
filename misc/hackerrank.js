// 1+2+3+4+5 = 15
// update value to 4 and sum = 20;
// which is > 15
// can use 3, bcs sum = 15;

function findMinValue(arr, n) {
  let sum = 0;
  let maxVal = Number.MIN_VALUE;
  // Calculate the sum of the elements and find the maximum value
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }     
  }

  // Calculate the average value and add the difference to each element
  const avgVal = Math.ceil(sum / n);
  const diff = Math.max(0, avgVal - maxVal);
  return maxVal + diff;
}

console.log(findMinValue([1, 2, 3, 5, 4], 5));
