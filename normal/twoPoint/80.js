/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length
    if(len<2){
        return;
    }
    let i = 2;
    for (j = 2; j < len; j++) {
        if (nums[i-2] != nums[j]) {
            nums[i] = nums[j]
            i++;
        }
    }
    return i;
};
removeDuplicates([1,1,1,1,2,2,3])