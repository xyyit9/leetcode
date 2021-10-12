/**
 * @param {number[]} nums
 * @return {number}
 */
// 原地哈希法
var firstMissingPositive = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    // 1. 先判断nums[i]是否符合1-N的要求
    // 2. 值为nums[i]应该存放在下标为nums[i]-1的位置上
    // 3. 交换以后，下标为num[i]-1的位置放置了正确的值，但是下标为i的值依然需要判断，因此为while循环
    while (nums[i] >= 1 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, i, nums[i] - 1);
    }
  }
  // 从前向后遍历，寻找第一个值和下标不一致的数字
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return len + 1;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
