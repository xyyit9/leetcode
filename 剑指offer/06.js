/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  var p = new ListNode(-1)
  p = head
  var res = []
  while (p !== null) {
    res.unshift(p.val)
    p = p.next
  }
  return res
}

function ListNode(val) {
  this.val = val
  this.next = null
}
var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
a.next = b
b.next = c

console.log(reversePrint(a))
