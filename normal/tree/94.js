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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const res = []
    tree(root, res)
    return res
};

function tree(root, res){
    if(root===null){
        return
    }
    tree(root.left, res)
    res.push(root.val)
    tree(root.right, res)
}