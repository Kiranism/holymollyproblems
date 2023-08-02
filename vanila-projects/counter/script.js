const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const counterText = document.querySelector(".counter");
let counter = 0;
const incrementFn = () => {
  let inputValue = document.getElementById("number").value;
  counter = +counter + +inputValue;
  counterText.innerHTML = counter;
  console.log(inputValue);
};

const decrementFn = () => {
  let inputValue = document.getElementById("number").value;
  counter = +counter - +inputValue;
  counterText.innerHTML = counter;
  console.log(inputValue);
};

const reset = () => {
  counter = 0;
  counterText.innerHTML = counter;
};
