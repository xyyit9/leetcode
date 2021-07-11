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
 var rightSideView = function (root) {
    if (root === null) {
      return [];
    }
    const queue = [];
    const res = [];
    queue.push(root);
    while (queue.length > 0) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const item = queue.shift();
        if (i === size - 1) {
          res.push(item.val);
        }
        if (item.left !== null) {
          queue.push(item.left);
        }
        if (item.right !== null) {
          queue.push(item.right);
        }
      }
    }
    return res;
  };
  