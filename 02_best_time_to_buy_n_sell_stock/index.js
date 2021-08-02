/**
 * Best Time to Buy and Sell Stock
 * Easy
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 *
 * Constraints:
 *
 * 1 <= prices.length <= 105
 * 0 <= prices[i] <= 104
 **/

// var maxProfit = function (prices) {
//   let max = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = 0; j < prices.length; j++) {
//       if (j > i && prices[j] - prices[i] > max) {
//         max = prices[j] - prices[i];
//       }
//     }
//   }

//   return max;
// };

// var maxProfit = function (prices) {
//   let min = 10000;
//   let max_profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min) {
//       min = prices[i];
//     } else if (prices[i] - min > max_profit) {
//       max_profit = prices[i] - min;
//     }
//   }

//   return max_profit;
// };

// function maxProfit(prices) {
//   if (prices.length < 2) return 0;

//   let min = prices[0];
//   let max = prices[prices.length - 1];
//   let p2 = prices.length - 1;

//   for (let p1 = 0; p1 < Math.floor(prices.length / 2); p1++) {
//     if (prices[p1] < min) {
//       min = prices[p1];
//     }
//     if (prices[p2] > max) {
//       max = prices[p2];
//     }
//     p2--;
//   }

//   if (max < min) {
//     return 0;
//   } else if (prices.length % 2 !== 0) {
//     if (
//       prices[Math.floor(prices.length / 2)] > max &&
//       prices[Math.floor(prices.length / 2)] > min
//     ) {
//       return prices[Math.floor(prices.length / 2)] - min;
//     } else if (prices[Math.floor(prices.length / 2)] < min) {
//       return max - prices[Math.floor(prices.length / 2)];
//     }
//   } else {
//     return max - min;
//   }
// }
var maxProfit = function (prices) {
  // given an array of integers
  // choose 1 day to buy (lowest price) and 1 day to sell (highest price)
  // buy < sell
  // return maximum profit possible
  // if no profit, return 0
  // B     S    => 6
  // [ 4,2,5,2,8,6 ]
  // 2 for loops, while keeping the biggest diff
  let diff = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 0; j < prices.length; j++) {
      if (j > i && prices[j] - prices[i] > diff) {
        diff = prices[j] - prices[i];
      }
    }
  }
  if (diff < 0) return 0;
  return diff;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 4, 2]));
console.log(maxProfit([1, 2, 4]));
);
