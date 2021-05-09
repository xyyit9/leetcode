/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const { ListNode, create, print } = require('./common')
var getDecimalValue = function(head) {
    let ans = 0
    while(head!=null){
        ans = ans*2 + head.val
        head = head.next
    }
    return ans
};

const list = create([1,0,1])
console.log(getDecimalValue(list))

