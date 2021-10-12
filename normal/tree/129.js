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
// 这题为什么不需要回溯pop？
// 其实推导一次过程就会发现，当getStr方法return的时候，其实是return的undefined，回到上一层root时，并没有改变str的值
// 以[1,2,3]为例，进入到节点2，再回到节点1的时候，str依然为'1'，并不是'12',因此想要共享状态，则需要使用数组此类数据类型

var sumNumbers = function (root) {
  const path = [];
  tree(root, path, "");
  const res = path.reduce((total, cur) => total + parseInt(cur), 0);
  return res;
};

var tree = function (root, path, str) {
  if (root === null) {
    return;
  }
  str += root.val.toString();
  if (root.left === null && root.right === null) {
    path.push(str);
    return;
  }
  tree(root.left, path, str);
  tree(root.right, path, str);
};
