/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    let dp = Array.from({ length: s.length }, () =>
        Array.from({ length: s.length })
    );
    let res = ''
    // dp[i][j]表示s中的字符串下标从i到j，是否为回文子串
    /* 
               j
           0 1 2 3 4
           b a b a b
       0 b T F T F F
       1 a   T F T F
    i  2 b     T F F
       3 a       T F
       4 b         T
       
       在上面的例子中，dp[1][3] = dp[2][2] && s[1]===s[3] 当前的值是由其左下方的值决定的
       因此对dp数组的遍历也比较特殊，需要从后向前遍历，才能保证每个值的左下方都先进行判断
    */
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = s.length - 1; j >= i; j--) {
            const len = j - i + 1;
            if (len === 1 || len === 2) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
            }

            if (len > res.length && dp[i][j]) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};
