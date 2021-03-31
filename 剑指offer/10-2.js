/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  var arr = []
  arr[0] = 1
  arr[1] = 1
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
  }
  return arr[n]
}

console.log(numWays(7))
