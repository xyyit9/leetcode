/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
  // 终止条件
  if (root === null || root === p || root === q) {
    return root;
  }
  // 后序遍历
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  // 当 left 为空 ，rightright 不为空,具体可分为两种情况：
  // p,q 其中一个在 root 的 右子树 中，此时 right 指向 p（假设为 p ）；
  // p,q 两节点都在 root 的 右子树 中，此时的 right 指向 最近公共祖先节点
  if (left === null) {
    return right;
  }
  if (right === null) {
    return left;
  }
  // 如果left和right都不为空， p,q 分列在 root 的 异侧 （分别在 左 / 右子树），因此 root 为最近公共祖先，返回 root ；
  return root;
};