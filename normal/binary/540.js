var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left + 1) / 2);
        let cns = 0;
        for (let num of nums) {
            if (num < nums[mid]) {
                cns++;
            }
        }
        if (isSingle(cns)) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return nums[left];
};

function isSingle(num) {
    return num % 2 === 1;
}