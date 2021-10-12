/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    // 注意：这里与普通的dp不同，根据题意，当前dp数组应该初始化为1
    const dp = Array.from({ length: nums.length }).fill(1);
    let res = 1;
    for (let i = 0; i < nums.length; i++) {
      // 寻找i之前的值，如果找到比i更小的值，就在此基础上+1
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
          res = Math.max(res, dp[i]);
        }
      }
    }
    return res
  };
  