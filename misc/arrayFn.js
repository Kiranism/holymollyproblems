// Map

let arr = [1, 2, 3, 4, 5];

const add = (num) => num + 2;

const map = arr.map((item) => add(item));
console.log("map =>", map);

Array.prototype.ourMap = (cb) => {
  let mapArr = [];

  for (i = 0; i < arr.length; i++) {
    mapArr.push(cb(arr[i]));
  }
  return mapArr;
};
const ourMap = arr.ourMap((item) => item + 2);
console.log("our map =>", ourMap);

// filter

const filteredFn = (n) => n > 3;
const resultFilter = arr.filter((item) => filteredFn(item));

console.log("filter=>", arr, resultFilter);

const ourFilter = () => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (filteredFn(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

console.log("Our filter=>", arr, ourFilter());

// reduce

const reduceFn = (prev, curr) => prev + curr;

const reduce = arr.reduce((prev, curr) => {
  return reduceFn(prev, curr);
}, 0);

console.log("reduce =>", arr, reduce);

const ourReduce = () => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = reduceFn(sum, arr[i]);
  }
  return sum;
};

console.log("Our reduce =>", arr, ourReduce());

function stringChar(a, n) {
  return a.charAt(n);
}

console.log(stringChar("hello", 1));
