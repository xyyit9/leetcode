/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // matrix_new[j][n - i - 1] = matrix[i][j];
  // i,j        j,len-i
  // len-j,i    len-i, len-j
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const len = n - 1;
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[len - j][i] = matrix[len - i][len - j];
      matrix[len - i][len - j] = matrix[j][len - i];
      matrix[j][len - i] = temp;
    }
  }
};
