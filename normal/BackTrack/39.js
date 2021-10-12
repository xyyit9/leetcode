/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {
    const res = []
    backtrack(candidates, target, 0, [], res)
    return res
};

function backtrack(candidates, target, index, ans, res) {
    const sum = ans.reduce((a, b) => a + b, 0)
    if (sum === target) {
        res.push([...ans])
        return
    }
    if (sum > target) {
        return
    }
    for (let i = index; i < candidates.length; i++) {
        ans.push(candidates[i])
        // 由于一个值可以被重复取多次，因此这里依然是i
        backtrack(candidates, target, i, ans, res)
        ans.pop()
    }
}