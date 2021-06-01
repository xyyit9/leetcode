/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const len = nums.length;
    let slow = 0;
    for (let quick = 0; quick < len; quick++) {
      if (nums[quick] !== val) {
        nums[slow] = nums[quick];
        slow++;
      }
    }
    return slow;
  };