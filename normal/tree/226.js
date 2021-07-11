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
 * @return {TreeNode}
 */
 var invertTree = function (root) {
    if (root === null) {
        return root
    }
    const right = root.right
    root.right = root.left
    root.left = right
    invertTree(root.left)
    invertTree(root.right)
    return root
};