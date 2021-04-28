const { ListNode, create, print } = require('./common')
var deleteDuplicates = function (head) {
    if (!head||!head.next) {
        return head;
    }
    let pre = new ListNode(-1)
    let cur = new ListNode(-1)
    pre = head
    cur = head.next
    while (cur != null) {
        if (cur.val != pre.val) {
            pre.next = cur
            pre = pre.next
            cur = cur.next
        } else {
            cur = cur.next
        }
    }
    // 应对[1,2,3,3,3]这样的情况
    pre.next = null
    return head
};


const list1 = create([])
const res =deleteDuplicates(list1)
print(res)
