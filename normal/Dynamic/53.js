/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    const dp = Array.from({ length: nums.length })
    dp[0] = nums[0]
    // 以第 i 个数结尾的「连续子数组的最大和」
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        // 如果前面相加的值，对于当前和的累加，只有拖累作用，就舍弃
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        res = Math.max(res, dp[i])
    }
    return res
};