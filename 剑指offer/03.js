/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  var map = {}
  var res = -1
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      res = nums[i]
      break
    }
    map[nums[i]] = 1
  }
  return res
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
