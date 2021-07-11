/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function (nums) {
    if(nums.length === 0){
        return null
    }
    const index = getMax(nums)
    const root = new TreeNode(nums[index])
    root.left = constructMaximumBinaryTree(nums.slice(0, index))
    root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length))
    return root;
};

function getMax(nums) {
    let max = Number.MIN_VALUE
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]
            res = i
        }
    }
    return res;
}