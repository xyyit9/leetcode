/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  backTrack(nums, [], res);
  return res;
};

function backTrack(nums, ans, res) {
  if (ans.length === nums.length) {
    res.push([...ans]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (ans.includes(nums[i])) {
      continue;
    }
    ans.push(nums[i]);
    backTrack(nums, ans, res);
    ans.pop(nums[i]);
  }
}
