const btn = document.getElementById("btn");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
console.log(modal);

btn.addEventListener("click", (event) => {
  console.log("cli");
  modal.style.display = "block";
});

close.addEventListener("click", (event) => {
  modal.style.display = "none";
});
