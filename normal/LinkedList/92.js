/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummyNode = new ListNode(-1)
    dummyNode.next = head
    let count = 0;
    let p = dummyNode;
    let preList;
    // 存储不需要转换链表的前后两段
    while (count !== right) {
      if (count === left - 1) {
        preList = p;
      }
      p = p.next;
      count++;
    }
    nextList = p.next;
    p.next = null;
    let pre = null;
    let cur = preList.next;
    let lastNode = cur;
    // 转换链表
    while(cur){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 拼接
    preList.next = pre
    lastNode.next = nextList
    return dummyNode.next;
  };