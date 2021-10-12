/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 const minDistance = (word1, word2) => {
    // dp[i][j] 代表 word1 中前 i 个字符，变换到 word2 中前 j 个字符，最短需要操作的次数
    let dp = Array.from(Array(word1.length + 1), () => Array(word2.length + 1).fill(0))
    // 特殊的初始化，一定要多加这一层
    // 需要考虑 word1 或 word2 一个字母都没有，即全增加/删除的情况，所以预留 dp[0][j] 和 dp[i][0]
    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j;
    }
    // 增，dp[i][j] = dp[i][j - 1] + 1
    // 删，dp[i][j] = dp[i - 1][j] + 1
    // 改，dp[i][j] = dp[i - 1][j - 1] + 1
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    return dp[word1.length][word2.length];
};