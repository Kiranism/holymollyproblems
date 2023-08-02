// looping an array

const numbers = [1, 2, 3, 4, 5];

// const newNums = numbers.map((item, index, array) => {
//   return item + 5;
// });

// const newNums = numbers.filter((item, index, array) => {
//   return item > 3;
// });

// const newNums = numbers.reduce((prev, item) => {
//   return prev + item;
// }, 0);

// const res = numbers.some((item, index, array) => {
//   return item > 3;
// });

const res = numbers.every((item, index, array) => {
  return item > 3;
});

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const final = [...num1, ...num2];
console.log(final);

const unsorted = [5, 3, 64, 4, 12];

const sorted = unsorted.sort((a, b) => a - b);

console.log(sorted);

