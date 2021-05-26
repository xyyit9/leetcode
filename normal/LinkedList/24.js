/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const dummyNode = new ListNode(-1)
    let pre = dummyNode
    dummyNode.next = head
    while (head != null && head.next != null) {
        const first = head;
        const second = head.next;
        pre.next = second;
        first.next = second.next;
        second.next = first
        pre = first;
        head = pre.next
    }
    return dummyNode.next;
};