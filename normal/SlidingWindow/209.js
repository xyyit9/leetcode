/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
    let i = 0
    let sum = 0
    let res = Number.MAX_VALUE
    for (let j = 0; j < nums.length && i < nums.length; j++) {
        let item = nums[j] ? nums[j] : 0
        sum += item
        while (sum >= target) {
            res = Math.min(res, j - i + 1)
            sum -= nums[i]
            i++
        }
    }
    return res === Number.MAX_VALUE ? 0 : res

};