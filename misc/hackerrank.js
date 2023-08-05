// 1+2+3+4+5 = 15
// update value to 4 and sum = 20;
// which is > 15
// can use 3, bcs sum = 15;

function findMinValue(arr, n) {
  let sum = 0;
  let maxVal = Number.MIN_VALUE;
  // Calculate the sum of the elements and find the maximum value
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }

  // Calculate the average value and add the difference to each element
  const avgVal = Math.ceil(sum / n);
  const diff = Math.max(0, avgVal - maxVal);
  return maxVal + diff;
}

// console.log(findMinValue([1, 2, 3, 5, 4], 5));

function fizzBuzz(n) {
  // Write your code here
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    const fizzBuzz = i % 5 === 0 && i % 3 === 0;
    if (fizzBuzz) {
      pattern += "FizzBuzz";
    } else if (buzz) {
      pattern += "Buzz";
    } else if (fizz) {
      pattern += "Fizz";
    } else {
      pattern += i;
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(fizzBuzz(15));

async function getCountryName(code) {
  let page = 1;
  let countryName = null;

  while (countryName === null) {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/countries?page=${page}`
    );
    const data = await response.json();

    data.data.forEach((item) => {
      if (item.alpha2Code === code) {
        countryName = item.name;
      }
    });

    if (data.data.total_pages == page++) break;
  }
  if (countryName === null) {
    throw new Error("Country code not found.");
  }
  return countryName;
}

function iterate(data, page) {
  let filteredRes = data.data.map.filter((item) => item.alpha2Code === code);
  if (filteredRes.length) {
    console.log("filteredResult", filteredRes);
  } else {
    page++;
  }
}

getCountryName("IN");

// const request = require("request");

// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     request(url, function (error, response, body) {
//       if (error) reject(error);
//       else resolve(body);
//     });
//   });
// }

async function getCountryName(countryCode) {
  let pageNumber = 1;
  let countryName = null;

  while (countryName === null) {
    let url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`;
    let response = await fetch(url);
    let responseBody = await JSON.parse(response);

    responseBody.data.forEach((countryData) => {
      if (countryData.alpha2Code === countryCode)
        countryName = countryData.name;
    });
    if (responseBody.total_pages == pageNumber++) break;
  }

  if (countryName === null) {
    throw new Error("Country code not found.");
  }
  return countryName;
}

function processOrderList(orderList, orderId, state) {
  // Write your code here
  return orderList
    .map((item) => {
      if (item.id === orderId) {
        item.state = state;
      }
    })
    .filter((item) => {
      item.state !== "Delivered";
    });
}

let orderList = [
  { id: 1, state: "Received" },
  { id: 1, state: "Received" },
  { id: 2, state: "Received" },
  { id: 3, state: "Delivered" },
];
console.log(processOrderList(orderList, 2, "Updated"));
