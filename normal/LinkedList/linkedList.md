## 反转链表
```js
// 翻转链表，输入头结点和尾节点
function traverse(head, tail) {
    let pre = tail.next
    let cur = head
    // 当pre等于tail时，说明翻转完毕
    while (pre !== tail) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    // 返回翻转后的，头节点和尾节点
    return [tail, head]
}
```
* 206 反转链表
* 92 反转链表 进阶，在指定的链表位置进行反转
* 24 两两交换链表中的节点
* 25 K 个一组翻转链表

## 快慢指针
即对链表中第N个节点进行操作
`slow`和`quick`的初始值，可以都等于`dummyNode`，或者`slow = head;fast = head.next`,大多数情况下取后者，需要仔细分析
* 141 判断链表中是否有环
* 876 返回链表的中间结点
* 19 删除链表的倒数第 n 个结点
* 83 去除升序链表中的重复元素
* 203 删除链表中特定的值

## 链表与数字
要注意进位
* 2 逆序两数相加
* 1290 链表表示二进制转换成十进制值

## 链表合并与分类
* 21 合并两个升序链表
* 328 把奇数节点和偶数节点分别排列
* 86 使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前

## 其它
* 160 找到两个单链表相交的起始节点
* 61 旋转链表

## 总结
1. 如果有`cur = cur.next.next`，则在条件判断中需要加上`cur!=null && cur.next!=null`