/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function (head) {
    // 由于是后半段的头节点，因此需要slow.next
    let midpre = findMid(head);
    let mid = midpre.next;
    midpre.next = null;
    const trverseMid = trverse(mid);
    let res = link(head, trverseMid);
    return res;
  };
  
  // 寻找链表的中间节点
  function findMid(head) {
    let fast = head;
    let slow = head;
    while ( fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  // 倒置链表
  function trverse(head) {
    let pre = null;
    let cur = head;
    while (cur !== null) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }
  // 两个链表合并
  function link(p, q) {
    const dummyNode = new ListNode(-1);
    let cur = dummyNode;
    while (p !== null || q !== null) {
      if (p !== null) {
        cur.next = p;
        p = p.next;
        cur = cur.next;
      }
      if (q !== null) {
        cur.next = q;
        q = q.next;
        cur = cur.next;
      }
    }
    return dummyNode.next
  }
  