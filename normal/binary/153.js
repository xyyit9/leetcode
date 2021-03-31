/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  if (nums.length == 0) {
    return -1
  }
  while (left < right) {
    let mid = left + ~~((right - left) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else if (nums[mid] < nums[right]) {
      right = mid
    }
  }
  return nums[left]
}
