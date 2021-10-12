
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
 var reverseBetween = function (head, left, right) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let cur = dummyNode;
  let count = 0;
  let preList;
  while (count !== right) {
    if (count === left - 1) {
      preList = cur;
    }
    cur = cur.next;
    count++;
  }
  head = preList.next;
  let pre=trverse(head, cur);
  preList.next = pre;
  return dummyNode.next;
};

function trverse(head, tail) {
  let pre = tail.next;
  let cur = head;
  while (pre !== tail) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre
}
