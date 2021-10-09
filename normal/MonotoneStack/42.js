/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function (height) {
    // 对于数组中的每个元素，我们找出下雨后水能达到的最高位置，
    // 等于从当前值向左向右分别出发，寻找两边最大高度的值，再讲两个最大高度中的较小值减去当前高度的值。
    // 可以提前存储两边的最大高度
    const len = height.length
    const left = []
    left[0] = height[0]
    for (let i = 1; i < len; i++) {
        left[i] = Math.max(left[i - 1], height[i])
    }
    const right = []
    right[len - 1] = height[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i])
    }
    let res = 0
    for (let i = 0; i < height.length; i++) {
        res += Math.min(right[i], left[i]) - height[i]
    }
    return res
};