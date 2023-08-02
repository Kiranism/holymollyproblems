const cardContainer = document.getElementById("card-container");
const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

let data = [];

document.addEventListener("DOMContentLoaded", (event) => {
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      data = res;
      appendDiv(data);
      console.log(res);
    })
    .catch((err) => console.log(err));
});

function appendDiv(data) {
  if (data.length) {
    for (let i = 0; i < data.length; i++) {
      cardContainer.innerHTML += ` <div class="card">
            <div class="card__img">
                <img src=${data[i].image}
                width="80px"
                />
            </div>
            <div class="card__info">
                <div class="card__info__coin">
                    <h2>Bitcon</h2>
                    <h2>23242342</h2>
                </div>
                <div class="card__info__name">
                    <h2>eth</h2>
                    <h2>-23424%</h2>
                </div>
            </div>
          </div>`;
    }
  } else {
    console.log("blahh");
  }
}
