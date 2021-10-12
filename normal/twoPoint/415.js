/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function (num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let pority = 0
    const res = []
    while (i >= 0 || j >= 0) {
        let p = num1[i] ? parseInt(num1[i]) : 0
        let q = num2[j] ? parseInt(num2[j]) : 0
        let sum = p + q + pority
        if (sum > 9) {
            pority = 1
        } else {
            pority = 0
        }
        res.unshift(sum % 10)
        i--
        j--
    }
    if (pority) {
        res.unshift(pority)
    }
    return res.join('')
};