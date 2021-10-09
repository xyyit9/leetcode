/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function (nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let target = nums.length - k;
    // 求得当前数组中right位置的值，是数组中的第index大的元素
    let index = parition(nums, left, right);
    // 说明第index元素已经被放在正确的位置上了
    while (index !== target) {
      if (index < target) {
        // 说明第target元素在index后面, 就缩小查找范围
        left = index + 1;
        index = parition(nums, left, right);
      } else {
        // 说明第target元素在index前面, 就缩小查找范围
        right = index - 1;
        index = parition(nums, left, right);
      }
    }
    return nums[index];
  };
  
  function parition(arr, left, right) {
    // index相当于一个临界点，左边的值都比index小，右边的值都比index大
    let index = left - 1;
    // 以right为比较值
    for (let i = left; i < right; i++) {
      // 如果比right小，就把index和i的位置互换
      if (arr[i] < arr[right]) {
        index++;
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }
    index++;
    // 最后需要把index和right的位置互换
    [arr[right], arr[index]] = [arr[index], arr[right]];
    return index;
  }
  