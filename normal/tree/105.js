/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/** 从前序与中序遍历序列构造二叉树
 * 输入：前序遍历数组，中序遍历数组
 * 返回：组成的当前节点
 */
 var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
      return null;
    }
    const val = preorder[0];
    let index = 0;
    for (let i = 0; i < inorder.length; i++) {
      if (inorder[i] === val) {
        index = i;
      }
    }
    const root = new TreeNode(val);
    root.left = buildTree(preorder.slice(1, 1 + index), inorder.slice(0, index));
    root.right = buildTree(
      preorder.slice(1 + index, preorder.length),
      inorder.slice(index + 1, inorder.length)
    );
    return root;
  };
  