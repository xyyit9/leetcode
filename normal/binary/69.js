/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 1) {
        return 1;
    }
    let left = 0;
    let right = Math.floor(x / 2)
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        const value = mid * mid
        if (value == x) {
            return mid
        } else if (value < x) {
            left = mid + 1;
        } else if (value > x) {
            right = mid - 1;
        }
    }
    // 寻找左侧边界的做法，例如在[5,7,7,8,8,10]数组中寻找8的开始位置，则结果为3
    // 因此若结果不等于8，则会在正确结果的右侧一位，因此结果需要-1
    return left - 1;
};