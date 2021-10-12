
/* 首先要注意题目条件，在题目描述中出现了 nums[-1] = nums[n] = -∞，这就代表着 
只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值

反证法
如果这句不成立，比如mid 的元素大于mid +1，那么左边一定有峰值。
如果没有，你从mid -1，开始往前推，会发现，要保证这点，就会出现元素0>1>2>...>mid -2>mid-1>mid。
即使这样，由于-1是无穷小，那么0这个点也是峰值。
 */
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    // 当left和right相等时，即找到了最大值，否则会mid==right==left死循环
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid; //寻找最大值，此时mid比mid+1大，因此right=mid
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        }
        /**
         *
         * 153题中是如下这样做，跳出循环的，但是在本题中却不行，只能将while条件改成left<right来做
          因为此时mid==right==left, 意味着已经找到峰值，需要跳出循环，
          但因为mid是峰值，所以会进入该条件nums[mid]>nums[mid+1]，并不会进入到这个条件中来
        else if (nums[mid] == nums[right]) {
          break; 

        } */
    }
    return left;
};