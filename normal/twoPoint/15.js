/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    // 去除重复值
    if (nums[i] === nums[i - 1]) continue;
    const target = -nums[i];
    // 双指针【i+1, nums.length-1】
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[i], nums[l], nums[r]]);
        // 去除重复值
        while (nums[l++] === nums[l]) continue;
        while (nums[r--] === nums[r]) continue;
      } else if (nums[l] + nums[r] < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};
