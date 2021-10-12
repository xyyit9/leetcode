/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 let res
 var diameterOfBinaryTree = function (root) {
     res = 0
     helper(root, res)
     return res
 };
 
 function helper(root) {
     if (root === null) {
         return 0
     }
     let left = helper(root.left)
     let right = helper(root.right)
     res = Math.max(left + right, res)
     return Math.max(left, right) + 1
 }