/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
    const used = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }))
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0] && backtrack(board, word, 0, used, i, j)) {
                return true;
            }
        }
    }
    return false;
};

function backtrack(board, word, index, used, i, j) {
    if (index === word.length) {
        return true;
    }
    if (!isArea(board, i, j)) {
        return false;
    }
    if (board[i][j] !== word[index] || used[i][j]==true) {
        return false;
    }
    used[i][j] = true;
    const res =
        backtrack(board, word, index + 1, used, i - 1, j) ||
        backtrack(board, word, index + 1, used, i + 1, j) ||
        backtrack(board, word, index + 1, used, i, j - 1) ||
        backtrack(board, word, index + 1, used, i, j + 1);
    // res为bfs去寻找周围的值，如果res为true，则返回true
    if (res) {
        return true;
    }
    // 撤销操作
    used[i][j] = false;
    // 这里return false, 也就是表示当前这条路走不通
    return false;
}

function isArea(board, i, j) {
    return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
}