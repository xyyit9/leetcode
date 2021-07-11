/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    link(root.left, root.right)
    return root

};

function link(node1, node2) {
    if (node1 === null || node2 === null) {
        return null
    }
    node1.next = node2
    link(node1.left, node1.right)
    link(node2.left, node2.right)
    link(node1.right, node2.left)
}