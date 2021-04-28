const { ListNode, create, print } = require('./common')
var mergeTwoLists = function (l1, l2) {
    let dummyNode = new ListNode(-1)
    let head = dummyNode;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            head.next = l1
            l1 = l1.next
        } else {
            head.next = l2
            l2 = l2.next
        }
        head = head.next
    }
    if (l1 != null) {
        head.next = l1
    }
    if (l2 != null) {
        head.next = l2
    }
    return dummyNode.next
};
const list1 = create([])
const list2 = create([0])
const res = mergeTwoLists(list1, list2)
print(res)