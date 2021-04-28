/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
两条规则：
1. 若存在left=mid或者right=mid的设置时，循环条件需要改成left<right,否则会存在left=right=mid的死循环
2. 若存在left=mid，则对mid的计算需要靠右，即使用let mid = left + Math.floor((right - left + 1) / 2),否则会存在left == mid < right的死循环
同理，若存在right=mid, 则读mid的计算要靠左，即使用let mid = left + Math.floor((right - left) / 2) 
*/
var findDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      // 尤其注意，这边不+1的话，会存在left == mid < right的死循环，所以设置mid尽量选靠右的
      let mid = left + Math.floor((right - left + 1) / 2);
      let cns = 0;
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] < mid) {
          cns++;
        }
      }
      if (cns > mid) {
        right = mid - 1;
      } else if (cns < mid) {
        left = mid; // mid值未检验，故left = mid, 同时while循环终止条件要改成left < right, 而不是<= ,避免mid==right==left
      } else if (cns == mid) {
        right = mid - 1;
      }
    }
    return left;
  };
  