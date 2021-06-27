/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)
    let len = nums.length;
    let res = Number.MAX_VALUE
    for (let i = 0; i < len; i++) {
        const data = target - nums[i];
        if (i > 0 && nums[i] === nums[i - 1]) { continue; }
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[l] + nums[r]
            if (Math.abs(sum + nums[i] - target) < Math.abs(res - target)) {
                res = sum + nums[i]
            }
            if (sum == data) {
                return target;
            } else if (sum < data) {
                l++
            } else {
                r--;
            }
        }
    }
    return res
};
console.log(threeSumClosest([1,1,-1], 1))