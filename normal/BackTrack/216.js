/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function (k, n) {
    const res = []
    backTrack(k, n, 1, [], res) 
    return res
};

function backTrack(k, n, index, ans, res) {
    const sum = ans.reduce((a, b) => a + b, 0)
    if (sum === n && ans.length === k) {
        res.push([...ans])
        return
    }
    if (sum > n || ans.length > k) {
        return
    }
    for (let i = index; i < 10; i++) {
        if (i + sum > n) continue
        ans.push(i)
        backTrack(k, n, i + 1, ans, res)
        ans.pop()
    }

}