/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) {
        return null
    }
    const len = postorder.length
    const num = postorder[len - 1]
    let index = 0
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === num) {
            index = i;
            break;
        }
    }
    const root = new TreeNode(num)
    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1, len), postorder.slice(index, len - 1))
    return root
};