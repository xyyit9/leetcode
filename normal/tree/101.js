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
 * @return {boolean}
 */
const { deserialize } = require('./common')
// 递归
var isSymmetric = function(root){
    return helper(root, root)
}
function helper(p, q){
    if(p === null && q ===null){
        return true
    }
    if(p === null || q === null){
        return false
    }
    return p.val===q.val && helper(p.left, q.right) && helper(p.right, q.left)
}
// 迭代
var isSymmetric = function (root) {
    const queue = []
    queue.push(root)
    while (queue.length > 0) {
        const size = queue.length
        const levelArray = []
        for (let i = 0; i < size; i++) {
            const item = queue.shift();
            if (item === null) {
                levelArray.push('#')
                continue
            }
            levelArray.push(item.val)
            queue.push(item.left)
            queue.push(item.right)
        }
        if (!isDuichen(levelArray)) {
            return false
        }
    }
    return true
};
function isDuichen(array) {
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        if (array[i] !== array[j]) {
            return false
        }
        i++;
        j--
    }
    return true
}
const tree = deserialize('1,2,#,3,#,#,2,#,3')
const flag = isSymmetric(tree)