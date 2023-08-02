var x = "a";

var hello = function () {
  let i = 5;
  for (let i = 0; i > 5; i++) {}
  setTimeout(() => {
    console.log(i);
  }, i * 10000);
};

hello();

// console.log(typeof typeof 1);

console.log("wassup");

// const promise = new Promise((resolve, reject) => {
//   return setTimeout(() => {
//     resolve("hello");
//   }, 2000);
// });

const promise = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("hello");
    }, 2000);
  });
};

// promise.then((res) => console.log(res));

const res = async () => {
  console.log("wassup");
  let result = await promise();
  console.log(result);
  console.log("siuuuuu");
};
res();

let obj = { a: "1", b: "2" };
let some = [...obj];
console.log(some);
