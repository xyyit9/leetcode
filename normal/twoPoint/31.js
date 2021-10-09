/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
    let index = -1;
    // 对于排列，升序数组是最小的，降序数组是最大的
    // 因此，从后向前查找第一个相邻升序的元素
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            index = i - 1;
            break;
        }
    }
    // 再从后向前寻找比当前index数字大的第一个数字，因为它的位数是最小的，所以带来的影响最小，可以得到下一个
    if (index !== -1) {
        for (let i = nums.length - 1; i > index; i--) {
            if (nums[index] < nums[i]) {
                [nums[index], nums[i]] = [nums[i], nums[index]];
                break
            }
        }
    }
    // 此时index后的数组一定还是降序排序的，因为升序是最小的，所以需要把index后的数字全部转为升序
    // 当然，按照题意，如果index此时为-1，也一样需要升序过程，两个过程可以合并
    let l = index + 1
    let r = nums.length - 1
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++
        r--
    }
    return nums
};