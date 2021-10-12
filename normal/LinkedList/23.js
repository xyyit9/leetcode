/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 思路就是归并排序
var mergeKLists = function (lists) {
  if (lists.length === 1) {
    return lists;
  }
  let leftLists = lists.slice(0, Math.floor(lists.length / 2));
  let rightLists = lists.slice(Math.floor(lists.length / 2));
  return link(mergeKLists(leftLists), mergeKLists(rightLists));
};

function link(p, q) {
  let dummyNode = new ListNode(-1);
  let cur = dummyNode;
  while (p !== null && q !== null) {
    if (p.val < q.val) {
      cur.next = p;
      p = p.next;
    } else {
      cur.next = q;
      q = q.next;
    }
    cur = cur.next;
  }
  if (p !== null) {
    cur.next = p;
  }
  if (q !== null) {
    cur.next = q;
  }

  return dummyNode.next;
}
