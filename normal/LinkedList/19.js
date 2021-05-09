/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const { ListNode, create, print } = require('./common')
var removeNthFromEnd = function (head, n) {
    if (head == null || head.next == null) {
        return null
    }
    let dummyNode = new ListNode(-1)
    dummyNode.next = head
    let fast = dummyNode
    let slow = dummyNode
    let count = n
    while (count != 0) {
        fast = fast.next;
        count--;
    }
    while (fast.next != null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next;
    return dummyNode.next;
};
const list = create([1, 2])
print(removeNthFromEnd(list, 2))