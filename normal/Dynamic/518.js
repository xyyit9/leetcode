/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    // 和爬楼梯类似，如果可以爬1，2，5步，则dp[i] = dp[i-1]+dp[i-2]+dp[i-5]
    // 但是爬楼梯是排列数，在乎每一次的顺序，即当前做法的内外循环进行交换
    // 求组合数
    for (const coin of coins) { // 列举当前的硬币数量
        for (let i = coin; i <= amount; i++) { //列举
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};