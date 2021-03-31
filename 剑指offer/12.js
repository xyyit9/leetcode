/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var words = [...word]
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0, board, words)) {
        return true
      }
    }
  }
  return false
}

function dfs(i, j, index, board, words) {
  if (!isArea(i, j, board) || board[i][j] != words[index]) {
    return false
  }
  if (index == words.length - 1) {
    return true
  }
  board[i][j] = '\0'
  let res =
    dfs(i + 1, j, index + 1, board, words) ||
    dfs(i - 1, j, index + 1, board, words) ||
    dfs(i, j + 1, index + 1, board, words) ||
    dfs(i, j - 1, index + 1, board, words)
  board[i][j] = words[index]
  return res
}

function isArea(i, j, board) {
  return i >= 0 && i < board.length && j >= 0 && j < board[0].length
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
)
