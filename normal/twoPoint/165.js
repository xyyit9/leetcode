/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function (version1, version2) {
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length; i++, j++) {
        let p = arr1[i] ? parseInt(arr1[i]) : 0
        let q = arr2[j] ? parseInt(arr2[j]) : 0
        if (p > q) {
            return 1
        }
        if (p < q) {
            return -1
        }
    }
    return 0
};