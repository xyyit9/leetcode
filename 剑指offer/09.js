
var CQueue = function () {
    this.arr = [];
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
    return null
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stack1.length == 0 && this.stack2.length == 0) {
        return -1
    }
    if (this.stack2.length == 0) {
        while (this.stack1.length != 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

 var res = []
 var obj = new CQueue()
 res.push(obj.appendTail(11))
 res.push(obj.deleteHead())
 res.push(obj.appendTail(1))
 res.push(obj.appendTail(17))
 res.push(obj.deleteHead())
 res.push(obj.deleteHead())
 res.push(obj.appendTail(19))
 res.push(obj.appendTail(20))
 res.push(obj.appendTail(13))
 res.push(obj.deleteHead())
 res.push(obj.deleteHead())
 res.push(obj.deleteHead())
 res.push(obj.appendTail(12))
 res.push(obj.appendTail(3))
 res.push(obj.deleteHead())
 res.push(obj.deleteHead())
 res.push(obj.deleteHead())
 res.push(obj.appendTail(10))
 res.push(obj.appendTail(19))
 res.push(obj.deleteHead())




 console.log(res)