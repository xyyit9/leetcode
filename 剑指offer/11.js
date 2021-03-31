/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let left = 0
  let right = numbers.length - 1
  if (numbers.length == 0) {
    return -1
  }
  while (left < right) {
    let mid = left + ~~((right - left) / 2)
    // 右边是有序的
    if (numbers[mid] < numbers[right]) {
      right = mid
      // 左边是有序的
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1
      // 重复数字的旋转
    } else if (numbers[mid] == numbers[right]) {
      right--
    }
  }
  return numbers[left]
}

console.log(minArray([1,3,5]))
