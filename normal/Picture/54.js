/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  const res = [];
  // while循环只遍历成环，最后不能成环旧不遍历了
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]);
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]);
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]);
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]);
    // 一轮迭代结束时，4条边的两端同时收窄 1
    right--;
    left++;
    bottom--;
    top++;
  }
  // 剩下的一列，从上至下 依次推入结果数组
  if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  // 剩下的一行，从左至右 依次推入结果数组
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  }

  return res;
};
