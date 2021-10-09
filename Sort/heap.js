/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var heapSort = function (nums) {
  // 初始化一个堆，此时堆顶元素是最大的
  heapify(nums, nums.length);
  // 注意这里需要进行nums.length-2次交换
  for (let i = 0; i < nums.length - 1; i++) {
    swap(nums, 0, nums.length - 1 - i);
    maxHeap(nums, 0, nums.length - 1 - i);
  }
  return nums;
};

// 自下而上构建一颗大顶堆, 整个序列的最大值就是堆顶的根节点
function heapify(arr, heapSize) {
  // 从最后一个非叶子节点开始调整
  let iParent = Math.floor((heapSize - 2) / 2);
  for (let i = iParent; i >= 0; i--) {
    maxHeap(arr, i, heapSize);
  }
}

// 自上而下的调整节点
function maxHeap(arr, index, heapSize) {
  while (true) {
    let iMax = index;
    // 左子节点比较
    if (2 * index + 1 < heapSize && arr[2 * index + 1] > arr[iMax]) {
      iMax = 2 * index + 1;
    }
    // 右子节点比较
    if (2 * index + 2 < heapSize && arr[2 * index + 2] > arr[iMax]) {
      iMax = 2 * index + 2;
    }
    if (iMax !== index) {
      swap(arr, iMax, index);
      index = iMax;
    } else {
      break;
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
