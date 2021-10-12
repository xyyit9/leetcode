/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function (n, k) {
    const res = []
    backtrack(n, k, 1, [], res)
    return res
};

// 每次从集合中选取元素，可选择的范围随着选择的进行而收缩，调整可选择的范围，就是要靠index。
function backtrack(n, k, index, ans, res) {
    if (ans.length === k) {
        res.push([...ans])
        return
    }
    for (let i = index; i <= n; i++) {
        ans.push(i)
        // 递归：当前i已经被放入了，因此，下一层搜索要从i+1开始
        backtrack(n, k, i + 1, ans, res)
        ans.pop()
    }
}