const { ListNode, create, print } = require('./common')

var hasCycle = function (head) {
    if (head==null || head.next==null) {
        return false
    }
    let fast = new ListNode(-1)
    let slow = new ListNode(-1)
    // slow和fast要不同，否则不会进入循环
    slow = head
    fast = head.next
    while(slow!=fast){
        // 若没有成环，则是fast先到达链表末尾
        // 需要判断fast和fast.next非空，由于fast = fast.next.next
        if(fast==null || fast.next==null){
            return false
        }
        slow = slow.next
        fast = fast.next.next
    }
    return true
};