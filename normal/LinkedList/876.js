/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
    }
    // 若是单数个，则fast==null
    // 若是偶数个，则fast.next ==null
    if (fast == null) {
        return slow
    }
    return slow.next
};