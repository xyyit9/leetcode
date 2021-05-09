/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { ListNode, create, print } = require('./common')

var addTwoNumbers = function (l1, l2) {
    let overflow = 0;
    let p1 = l1
    let p2 = l2
    let dummyNode = new ListNode(-1)
    let res = dummyNode
    while (p1 != null || p2 != null) {
        let value1 = 0
        let value2 = 0
        if (p1 !== null) {
            value1 = p1.val
            p1 = p1.next

        }
        if (p2 !== null) {
            value2 = p2.val
            p2 = p2.next
        }
        let value = (value1 + value2 + overflow) % 10
        if (value != value1 + value2 + overflow) {
            overflow = 1
        } else {
            overflow = 0
        }
        const newListNode = new ListNode(value)
        res.next = newListNode;
        res = res.next
    }
    if (overflow === 1) {
        const newListNode = new ListNode(overflow)
        res.next = newListNode;
    }
    return dummyNode.next
};
const list1 = create([2, 4, 3])
const list2 = create([5, 6, 4])
print(addTwoNumbers(list1, list2))