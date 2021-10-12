/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function (nums) {
    const res = []
    backtrack(nums, 0, [], res)
    return res
};

function backtrack(nums, index, ans, res) {
    res.push([...ans])
    for (let i = index; i < nums.length; i++) {
        ans.push(nums[i])
        backtrack(nums, i + 1, ans, res)
        ans.pop()
    }
}