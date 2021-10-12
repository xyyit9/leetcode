/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0]
    const res = []
    for (let i = 0; i < intervals.length; i++) {
        const cur = intervals[i]
        if (cur[0] > prev[1]) {
            res.push(prev)
            prev = cur
        } else {
            prev = [prev[0], Math.max(cur[1], prev[1])]
        }
    }
    res.push(prev)
    return res

};