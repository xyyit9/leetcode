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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function (root) {
    if (root === null) {
      return [];
    }
    const res = [];
    const queue = [];
    let levelFlag = 1;
    queue.push(root);
    while (queue.length > 0) {
      const size = queue.length;
      const levelArray = [];
      for (let i = 0; i < size; i++) {
        const item = queue.shift();
        if (levelFlag > 0) {
          levelArray.push(item.val);
        } else {
          levelArray.unshift(item.val);
        }
        if (item.left !== null) {
          queue.push(item.left);
        }
        if (item.right !== null) {
          queue.push(item.right);
        }
      }
      levelFlag = levelFlag * -1;
      res.push(levelArray);
    }
    return res;
  };
  