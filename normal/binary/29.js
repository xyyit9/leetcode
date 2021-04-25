/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let flag = 1
    if ((divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0)) {
        flag = -1
    }
    if (divisor < 0) {
        divisor = -divisor;
    }
    if (dividend < 0) {
        dividend = -dividend;
    }
    if (divisor === 1 || divisor === -1) {
        if (special(flag * dividend)) {
            return flag *(Math.pow(2, 31) - 1)
        }
        return flag * dividend
    }
    let left = 0;
    let right = dividend;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        let value = add(mid, divisor)
        if (value == dividend) {
            return flag * mid
        } else if (value > dividend) {
            right = mid - 1;
        } else if (value < dividend) {
            left = mid + 1;
        }
    }
    const res = flag * (left - 1)
    if (special(res)) {
        return flag * (Math.pow(2, 31) - 1)
    }
    return res;
};

function add(mid, divisor) {
    return mid * divisor
}
function special(res) {
    return res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)
}
console.log(divide(-2147483648,2))