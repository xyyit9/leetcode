/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        if (res.includes(nums[i])) {
            return [res.indexOf(nums[i]), i]
        }
        const t = target - nums[i]
        res[i] = t
    }
};