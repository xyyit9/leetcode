/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let tail = m + n - 1;
    let cur;
    while (i >= 0 || j >= 0) {
      if (i === -1) {
        cur = nums2[j--];
      } else if (j === -1) {
        cur = nums1[i--];
      } else if (nums1[i] > nums2[j]) {
        cur = nums1[i--];
      } else {
        cur = nums2[j--];
      }
      nums1[tail--] = cur;
    }
    return nums1
  };