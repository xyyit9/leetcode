var minSubArrayLen = function (target, nums) {
    const len = nums.length;
    let l = 0;
    let r = 0;
    let sum = nums[0];
    let res = Number.MAX_VALUE;
    while (l <= r && r < len) {
      if (sum < target) {
        r++;
        sum += nums[r];
      } else {
        res = Math.min(res, r - l + 1);
        sum -= nums[l];
        l++;
      }
    }
    if(res === Number.MAX_VALUE){
        return 0;
    }
    return res;
  };