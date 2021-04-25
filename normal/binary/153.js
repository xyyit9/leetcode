/**
 * @param {number[]} nums
 * @return {number}
 */
/*  要使用right和mid比较，因为如果用left
 [1,2,3]中>左  选左边
 [4,5,6,0]中>左  选右边
 相同的情况却是不同的策略，故必须用right和mid比较
 如果是寻找最大值，则用left和mid比较 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;  // 由于是找数组内的最小值，故mid仍然算在内
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] == nums[right]) {
      break;  // 此时mid==right==left, 需要跳出循环
    }
  }
  return nums[left];
};

console.log(findMin([3, 1, 2]));
