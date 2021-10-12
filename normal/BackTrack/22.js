/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    const res = []
    backtrack(n, n, n, '', res)
    return res
};
function backtrack(ln, rn, n, str, res) {
    if (str.length === n * 2) {
        res.push(str)
        return
    }
    // 只要左括号有剩，就可以选它，然后继续做选择（递归）
    if (ln > 0) {
        backtrack(ln - 1, rn, n, str + '(', res)
    }
    // 右括号比左括号剩的多，才能选右括号
    if (rn > ln) {
        backtrack(ln, rn - 1, n, str + ')', res)
    }
}