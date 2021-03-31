/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  var arr = []
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
  }
  return arr[n]
}

console.log(fib(45))
