function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    console.log(...args, key);
    console.log("cache", cache);
    if (key in cache) {
      return cache[key];
    }
    const fnOp = fn(...args);
    cache[key] = fnOp;
    console.log("cache", cache);
    return fnOp;
  };
}
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3));
console.log(memoizedFn(3, 4));
console.log(memoizedFn(3, 10));

let parse = JSON.stringify(2, 3);
console.log(parse);

function some(...args) {
  console.log(args);
}

some(1, 2, 3);
