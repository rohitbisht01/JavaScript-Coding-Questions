const sellStocks = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        profit = Math.max(profit, prices[j] - prices[i]);
      }
    }
  }
  return profit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(sellStocks(prices));

// greedy algorithm
const sellStocksOptimized = function (prices) {
  let profit = 0;
  let smallest_price = prices[0] || 0;
  for (let i = 1; i < prices.length; i++) {
    smallest_price = Math.min(smallest_price, prices[i]);
    profit = Math.max(profit, prices[i] - smallest_price);
  }
  return profit;
};
console.log(sellStocksOptimized(prices));
