/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const len = nums.length;
    const res = [];
    nums.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < len; i++) {
      const target = -nums[i];
      if(target<0){
          break;
      }
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      let l = i + 1;
      let r = len - 1;
      while (l < r) {
        if (nums[l] + nums[r] === target) {
          res.push([nums[i], nums[l], nums[r]]);
          while (nums[l] === nums[l + 1]) {
            l++;
          }
          while (nums[r] === nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        } else if (nums[l] + nums[r] < target) {
          l++;
        } else {
          r--;
        }
      }
    }
    return res;
  };