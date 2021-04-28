/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    // 153题找最小值时，不能使用left和mid比较，因为[1,2,3,4]left<mid选左边[4,5,0,1]left<mid却选右边
    // 本题目的场景下，可以使用left和mid进行比较
    while (left < right) {
      // 判断如下情况[5, 5, 5, 1, 2, 3, 4, 5],target = 5
      if (arr[left] === target) {
        return left;
      }
      let mid = left + Math.floor((right - left) / 2);
      // 左边有序
      if (arr[right] < arr[mid]) {
        if (arr[left] <= target && target <= arr[mid]) {
          right = mid;
        } else {
          left = mid + 1;
        }
        // 右边有序
      } else if (arr[right] > arr[mid]) {
        // 注意这边arr[mid] < target, 若是arr[mid] <= target, 则left = mid, 由于mid是偏向左的，造成死循环
        if (arr[mid] < target && target <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      } else if (arr[right] === arr[mid]) {
        right--;
      }
    }
    if (arr[left] != target) {
      return -1;
    }
    return left;
  };