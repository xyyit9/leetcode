/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null
    }
    let p = headA;
    let q = headB
    while (p !== q) {
        // 由于p = p.next 因此需要判断p !== null
        if (p !== null) {
            p = p.next
        } else {
            p = headB
        }
        if (q !== null) {
            q = q.next
        } else {
            q = headA
        }
    }
    return p
};