/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  // 0表示没有股票
  dp[0][0] = 0;
  // 1表示拥有股票，第0天就拥有了股票，说明花掉了prices[0]元
  dp[0][1] = -prices[0];
  // 表示第i天拥有股票，或卖掉股票的值
  for (let i = 1; i < n; ++i) {
    // 当天没有股票 = 前一天就没有股票  或者  前一天有股票，现在卖掉了
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 当天有股票 = 前一天就有股票  或者  前一天没有股票，现在买了
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};
