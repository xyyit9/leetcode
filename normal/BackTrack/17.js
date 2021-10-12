/**
 * @param {string} digits
 * @return {string[]}
 */
 let numMap = new Map([
    ['0', ''],
    ['1', ''],
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
])
var letterCombinations = function (digits) {
    const res = []
    backtrack(digits, [], res)
    return res
};

function backtrack(digits, ans, res) {
    if (digits.length === 0) {
        res.push(ans.join(''))
        return
    }
    let lists = numMap.get(digits[0]).split('')
    for (let i = 0; i < lists.length; i++) {
        ans.push(lists[i])
        backtrack(digits.slice(1), ans, res)
        ans.pop()
    }
}
letterCombinations('23')