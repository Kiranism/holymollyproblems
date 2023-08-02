// Best Time to Buy and Sell Stock

//  [7, 1, 5, 3, 6, 4] => prices
//  1 ,2, 3, 4, 5, 6  => days

// function maxProfit(prices) {
//   var highestPrice = prices[prices.length - 1]; //last array element
//   var maxProfit = 0;
//   for (i = prices.length - 1; i >= 0; i--) {
//     if (prices[i] > highestPrice) highestPrice = prices[i];
//     if (maxProfit < highestPrice - prices[i])
//       maxProfit = highestPrice - prices[i];
//   }
//   return maxProfit;
// }

function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let profit_max = 0;
  while (right <= prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      profit_max = Math.max(profit, profit_max);
    } else {
      left = right;
    }
    right++;
  }
  return profit_max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// var maxProfit = function (prices) {
//   let buy = prices[0],
//     max_profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (buy > prices[i]) {
//       buy = prices[i];
//     } else if (prices[i] - buy > max_profit) {
//       max_profit = prices[i] - buy;
//     }
//   }
//   return max_profit;
// };


/* 
prices = [7,1,4,6,2]
* lets initialize buy price = 0, sell price = 0 and max_profit = 0;
* while sellprice <= prices.length [5] we need to check
    if sellprice 7 < 1 => price = sellprice => price=1,
    
  else  set sellprice = 1;
    

*/