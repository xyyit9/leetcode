const { ListNode, create, print } = require('./common')
var deleteDuplicates = function (head) {
    if(head===null || head.next ===null){
        return head
    }
    let pre = head
    let cur = head.next
    while(cur!=null){
        if(pre.val === cur.val){
            cur=cur.next
        }else{
            pre.next=cur
            cur = cur.next
            pre=pre.next
        }
    }
    if(pre.next!=null){
        pre.next = null
    }
    return head
};


const list1 = create([1,1,2,3,3])
const res =deleteDuplicates(list1)
print(res)
