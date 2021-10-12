/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const dp = Array.from({ length: m }, () => Array.from({ length: n }).fill(0))
    let max = 0
    // dp[i][j]表示从[0][0]到[i][j]的范围内可以找到的最大正方形的边长
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                if (i == 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    // 当前格子受限于其，左，上，左上格子的正方形数量，和木桶理论一样，需要求出最小值
                    dp[i][j] =Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
                max = Math.max(dp[i][j], max)
            }
        }
    }
    return max*max
};