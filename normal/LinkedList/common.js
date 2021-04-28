function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function create(arr) {
    if (!arr || arr.length === 0) {
        return null
    }
    let dummyNode = new ListNode(-1)
    let head = dummyNode
    for (num of arr) {
        let cur = new ListNode(num)
        head.next = cur
        head = head.next
    }
    return dummyNode.next
}

function print(node) {
    let res = []
    while (node != null) {
        res.push(node.val)
        node = node.next
    }
    console.log(res)
    return res;
}
module.exports = {
    ListNode,
    create,
    print
}