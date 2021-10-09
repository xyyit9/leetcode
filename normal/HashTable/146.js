/**
 * @param {number} capacity
 */
// map的本质是对象，因此时间复杂度为O(1)
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let value = -1;
  if (this.map.has(key)) {
    value = this.map.get(key);
    // 记得要更新map中值的顺序
    this.map.delete(key);
    this.map.set(key, value);
  }
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果已经存在key，就先删除
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  // 如果超出可存放的数量，就先删除第一个key值
  if (this.map.size == this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
  this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
