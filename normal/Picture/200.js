/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function (grid) {
    count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                bfs(grid, i, j)
                count++
            }
        }
    }
    return count
};

function bfs(grid, i, j) {
    if (!isArea(grid, i, j)) {
        return
    }
    if (grid[i][j] === '0' || grid[i][j] === '2') {
        return
    }
    grid[i][j] = '2'
    bfs(grid, i - 1, j)
    bfs(grid, i + 1, j)
    bfs(grid, i, j - 1)
    bfs(grid, i, j + 1)
}

function isArea(grid, i, j) {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length
}