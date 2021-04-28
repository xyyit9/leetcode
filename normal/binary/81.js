/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// 与33题类似，但是存在重复元素
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] == target) {
        return true;
      }
      // 左边有序
      if (nums[right] < nums[mid]) {
          // 判断值是否在左边有序的区间内
        if (nums[left] <= target && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
        // 右边有序
      } else if (nums[right] > nums[mid]) {
          // 判断值是否在右边有序的区间内
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      // 遇到重复元素，就右边界减一，然后在新区间上继续二分查找
      } else if(nums[right] == nums[mid]){
          right--;
      }
    }
    return false
  };
  