const boxContainer = document.querySelector(".box-container");
const boxes = document.querySelectorAll(".box");
console.log("boxes", boxes);
let arr = [];
boxContainer.addEventListener("click", (event) => {
  const value = event.target.dataset.value;

  console.log("boxes", boxes);
  boxes.forEach((item) => {
    if (item.getAttribute("data-value") === value) {
      item.classList.add("coloredbox");
      arr.push(item);
      console.log("arr", arr);
    }
  });
  if (arr.length === 7) {
    console.log("timeout on");
    setTimeout(() => {
      for (let i = 0; i < arr.length; i++) {
        let index = i;
        setTimeout(() => {
          arr[index].classList.remove("coloredbox");
        }, 1000 * i);
      }
    }, 2000);
  }
});

// setTimeout(() => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].classList.remove("coloredbox");
//   }
// }, 2000);
