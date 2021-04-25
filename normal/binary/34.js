var searchRange = function (nums, target) {
    let resLeft;
    let resRight;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] == target) {
        right = mid - 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      }
    }
    if (left > nums.length - 1 || nums[left] != target) {
      resLeft = -1;
    }else{
      resLeft = left;
    }
  
    left = 0;
    right = nums.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] == target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      }
    }
    if (right < 0 || nums[right] != target) {
      resRight = -1;
    } else{
      resRight = right;
    }
    return [resLeft, resRight];
  };