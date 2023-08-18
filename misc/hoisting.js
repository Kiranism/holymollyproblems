/* 
What is Hoisting?
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope */

// variable hoisting
var a;
console.log(a);
var a = 10;
console.log(a);

// function hoisting
hello();
function hello() {
  return console.log("hello world!");
}

const object2 = {
  message: "hello, world!",
};

function logMessage(a, b) {
  console.log(this.message, a, b);
}

logMessage.apply(object2, ["hello", "wassup"]);

function sum(a) {
  return function (b) {
    if (!b) return a;
    return sum(a + b);
  };
}

console.log(sum(2)(6)(2)());

// debouncingt

const debounce = (cb, delay) => {
  let timer;
  return () => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
};

const print = () => {
  return console.log("hello wassup from print");
};

// debounce(print, 2000)();

function x() {
  for (var i = 0; i < 3; i++) {
    function y(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
    y(i);
  }
}
x();

const obj = {
  name: "kiran",
  age: "22",
  hobby: {
    sports: "cricket",
    entertainment: "movies",
  },
};

// const obj2 = JSON.parse(JSON.stringify(obj)); //deep copy
const obj2 = structuredClone(obj); //deep copy
obj2.age = "30";
obj2.hobby.sports = "football";
console.log("obj1", obj);
console.log("obj2", obj2);
