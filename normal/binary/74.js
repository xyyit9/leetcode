/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0) {
    return -1
  }
  let n = matrix.length
  let m = matrix[0].length
  let left = 0
  let right = m * n - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let cur = matrix[Math.floor(mid/m)][mid % m]
    if (cur == target) {
      return true
    } else if (cur < target) {
      left = mid + 1
    } else if (cur > target) {
      right = mid - 1
    }
  }
  return false;
}

searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)