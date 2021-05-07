/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const { ListNode, create, print } = require('./common')

var removeElements = function (head, val) {
    let dummyNode = new ListNode(-1)
    dummyNode.next = head;
    let cur = head;
    let pre = dummyNode;
    while (cur != null) {
        if (cur.val === val) {
            pre.next = cur.next;
            cur = cur.next
        }else{
            pre = pre.next
            cur = cur.next
        }
    }
    return dummyNode.next
};

const list = create([1, 2, 6, 3, 4, 5, 6])
const res = removeElements(list, 6)
print(res)