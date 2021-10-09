/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    // 总有一边是有序的，对有序的一边进行判断，如果左边有序
    if (nums[left] <= nums[mid]) {
      // target是否在左边
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    // 如果右边是有序的
    } else {
      // target是否在右边
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1
};
