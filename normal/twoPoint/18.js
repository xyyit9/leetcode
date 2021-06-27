/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    const len = nums.length;
    const res = []
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { continue }
        for (let j = i + 1; j < len - 2; j++) {
            // j>i+1, 这一步很关键
            if (j>i+1 && nums[j] === nums[j - 1]) { continue }
            let l = j + 1;
            let r = len - 1;
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    while (nums[l] === nums[l + 1]) { l++; }
                    while (nums[r] === nums[r - 1]) { r--; }
                    l++;
                    r--;
                } else if (sum < target) {
                    l++
                } else {
                    r--
                }
            }
        }
    }
    return res;
};


console.log(fourSum([2, 2, 2, 2, 2], 8))