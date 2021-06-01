/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const len = height.length
    let res = Number.MIN_VALUE
    for (let i = 0, j = len - 1; i < j;) {
        const data = (j - i) * (Math.min(height[i], height[j]))
        res = Math.max(res, data)
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }

    }
    console.log(res)
    return res;
};
maxArea([4, 3, 2, 1, 4])