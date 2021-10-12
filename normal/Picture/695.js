/**
 * @param {number[][]} grid
 * @return {number}
 */
 let res
 var maxAreaOfIsland = function (grid) {
     res = []
     let total
     for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid[0].length; j++) {
             if (grid[i][j] === 1) {
                 total = bfs(grid, i, j)
                 res.push(total)
             }
         }
     }
     res.sort((a, b) => a - b)
     return res.length ? res[res.length - 1] : 0
 
 };
 function bfs(grid, i, j) {
     if (!isArea(grid, i, j)) {
         return 0
     }
     if (grid[i][j] === 0 || grid[i][j] === 2) {
         return 0
     }
     grid[i][j] = 2
     sum = bfs(grid, i - 1, j) + bfs(grid, i + 1, j) + bfs(grid, i, j - 1) + bfs(grid, i, j + 1) + 1
     return sum
 }
 function isArea(grid, i, j) {
     return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length
 }