var curry = function (fn) {
  return function curried(...arg) {
    fn(...arg);
    return curried(...arg);
  };
};

function sum(a, b) {
  return a + b;
}
const csum = curry(sum);

csum(1, 2)(10);
