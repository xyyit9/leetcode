/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    let i = 0;
    for (let j = 0; j < len; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;
};