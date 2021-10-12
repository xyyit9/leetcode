/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function (coins, amount) {
    const dp = Array.from({ length: amount + 1 }, () => amount + 1)
    dp[0] = 0
    // 对于这题来说，求组合数和求排列数是没有影响的，因为都会求最小值，内外循环是可以交换的
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            if (i < coin) {
                continue
            }
            dp[i] = Math.min(dp[i - coin] + 1, dp[i])
        }
    }
    return dp[amount] !== amount + 1 ? dp[amount] : -1
};