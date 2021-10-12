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
 var deleteDuplicates = function (head) {
    const dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode
    let cur = head
    while (cur !== null && cur.next !== null) {
        if (cur.next.val === cur.val) {
            // 注意：这里是while而不是if，因为要把重复的找完
            while (cur.next !== null && cur.next.val === cur.val) {
                cur = cur.next
            }
            cur = cur.next
            pre.next = cur
        } else {
            pre = pre.next
            cur = cur.next
        }
    }
    return dummyNode.next

};