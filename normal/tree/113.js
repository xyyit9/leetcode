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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    const res = []
    getSum(root, targetSum, [],res)
    return res
};

var getSum = function(root, targetSum, arr,res){
    if(root === null){
        return
    }
    arr.push(root.val)
    if(root.left === null && root.right === null && root.val === targetSum){
        res.push([...arr])
    }
    getSum(root.left, targetSum - root.val, arr, res)
    getSum(root.right, targetSum - root.val, arr, res)
    arr.pop()
}