// N = 5, M = 13

// price = { 3, 4, 5, 2, 4}
// magical_price = {1,2,5,1,3} after using magic

// output 4

function minimumMagic() {
  let operation = 0;
  let res = [];
  for (let i = 0; i < N; i++) {
    res[i] = price[i] - magical_price[i];
  }
  return res;
}

console.log(
  minimumMagic(
    (N = 5),
    (M = 13),
    (price = [3, 4, 5, 2, 4]),
    (magical_price = [1, 2, 5, 1, 3])
  )
);

function findMissingNumber(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let missingNumber = [];
  for (let i = min; i < max; i++) {
    if (!arr.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

console.log(findMissingNumber([1, 2, 4, 5, 7, 9]));
