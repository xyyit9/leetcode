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
 * @return {TreeNode[]}
 */
let map
let res
var findDuplicateSubtrees = function (root) {
    map = new Map()
    res = []
    traverse(root);
    return res;
};

function traverse(root) {
    if (root === null) {
        return '#'
    }
    const left = traverse(root.left)
    const right = traverse(root.right)
    const detail = left + ',' + right + ',' + root.val
    if (!map.has(detail)) {
        map.set(detail, 0)
    } else {
        map.set(detail, map.get(detail) + 1)
    }

    if (map.get(detail) === 1) {
        res.push(root)
    }
    return detail;
}