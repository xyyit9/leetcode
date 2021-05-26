/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null || k === 0) {
      return head;
    }
    let cur = head;
    let count = 1;
    // count记录链表的长度
    while (cur.next != null) {
      cur = cur.next;
      count++;
    }
    // 剩余的位置n
    let n = count - (k % count);
    if (n === count) {
      return head;
    }
    // cur此时在链表尾部，指向头部，再向后数n个位置
    cur.next = head;
    while(n){
        cur = cur.next;
        n --;
    }
    const ret = cur.next;
    cur.next = null;
    return ret;
  };