var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      return fn(...args);
    }, t);
  };
};
