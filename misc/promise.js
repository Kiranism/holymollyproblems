// for (let i = 1; i <= 3; i++) {
//   let row = "* * *";

//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// console.log("Starting the timer....");

// setTimeout(() => {
//   console.log("Timer stopped!");
// }, 2000);

// function somefn() {
//   let result = true;
//   let promise = new Promise(resolve, reject) => {
//     if (result) {
//       resolve("successful");
//     } else {
//       reject("bad luck");
//     }
//   };
// }

function currying(num) {
  let sum = num;

  function innerCurrying(nextNum) {
    if (nextNum === undefined) return sum;
    sum += num;
    return currying(num + nextNum);
  }
}
// const result = currying(10)(10)(20)();

// console.log(result);

function add() {
  let count = 1;
  return function () {
    return count++;
  };
}

const output = add();

function addClose(x, y) {
  if (y === undefined) {
    return function (y) {
      return x + y;
    };
  } else {
    return x + y;
  }
}

// console.log(addClose(10)(20));
// console.log(addClose(10, 20));

const promise1 = Promise.resolve("Hello World!");

promise1.then((res) => console.log(res));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Success");
  }, 2000);
});

promise.then((res) => console.log(res));

function a() {
  let count = 0;
  let timer;
  function start() {
    timer = setInterval(() => {
      console.log(count++);
    }, 1000);
  }

  function stop() {
    clearInterval(timer);
  }
  return { start, stop };
}

a().start();
a().stop();
