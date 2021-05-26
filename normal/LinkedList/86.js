/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let smallHead = new ListNode(-1)
    let small = smallHead
    let largeHead = new ListNode(-1)
    let large = largeHead
    let cur = head;
    while (cur) {
        if (cur.val < x) {
            small.next = cur;
            small = small.next;
        } else {
            large.next = cur;
            large = large.next;
        }
        cur = cur.next
    }
    large.next = null
    small.next = largeHead.next;
    return smallHead.next
};
