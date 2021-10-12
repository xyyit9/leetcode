const longestValidParentheses = (s) => {
    let maxLen = 0;
    const len = s.length;
    const dp = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
      if (s[i] == ')') {
        // 如果前一个是(, 则与之匹配起来
        if (s[i - 1] == '(') {
          if (i - 2 >= 0) {
            dp[i] = dp[i - 2] + 2;
          } else {
            dp[i] = 2;
          }
        // 如果前一个不是(, 则需要向前找到一个左括号与之匹配，例如（）（（））
        // ()(())
        // 02002?
        } else if (s[i - dp[i - 1] - 1] == '(') {
          if (i - dp[i - 1] - 2 >= 0) {
            dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
          } else {
            dp[i] = dp[i - 1] + 2;
          }
        }
      }
      maxLen = Math.max(maxLen, dp[i]);
    }
    return maxLen;
  };