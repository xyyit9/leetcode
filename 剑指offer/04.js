/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix === null || matrix.length == 0) {
    return false
  }
  let m = matrix.length
  let n = matrix[0].length
  // 从右上角开始
  let row = 0
  let col = n - 1
  while (row < m && col >= 0) {
    // 如果当前位置元素比target大，则col--
    if (matrix[row][col] > target) {
      col--
    } else if (matrix[row][col] < target) {
      //如果当前位置元素比target小，则row++
      row++
    } else {
      //如果相等，返回true
      return true
    }
  }
  return false
}

console.log(
  findNumberIn2DArray(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
)
