const starContainer = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
console.log(stars);
const rating = document.getElementById("rating");

let filled = 0;

starContainer.addEventListener("click", (event) => {
  const value = event.target.getAttribute("data-value");
  console.log(value);

  for (let i = 0; i < filled; i++) {
    stars[i].classList.remove("star-filled");
  }

  for (let i = 0; i < value; i++) {
    stars[i].classList.add("star-filled");
  }
  filled = value;
  rating.innerHTML = `Rating ${value}`;
});

starContainer.addEventListener("mouseover", (event) => {
  const value = event.target.getAttribute("data-value");

  for (let i = 0; i < filled; i++) {
    stars[i].classList.remove("star-filled");
  }

  for (let i = 0; i < value; i++) {
    stars[i].classList.add("star-filled");
  }
});

starContainer.addEventListener("mouseleave", (event) => {
  for (let i = 0; i < 5; i++) {
    stars[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filled; i++) {
    stars[i].classList.add("star-filled");
  }
});
