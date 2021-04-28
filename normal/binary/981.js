/**
 * Initialize your data structure here.
 */
// Map(1) { 'foo' => [ [ 'bar', 1 ], [ 'bar2', 2 ], [ 'bar3', 3 ] ] }
var TimeMap = function () {
    this.map = new Map()
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map.has(key)) {
        this.map.get(key).push([value, timestamp])
    } else {
        this.map.set(key, [[value, timestamp]])
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) {
        return ""
    }
    let arr = this.map.get(key)
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (arr[mid][1] > timestamp) {
            right = mid - 1
        } else if (arr[mid][1] < timestamp) {
            left = mid + 1
        } else {
            return arr[mid][0]
        }
    }
    if (right >= 0) {
        return arr[right][0]
    }
    return ""
};

// const obj = new TimeMap();
// obj.set('foo', 'bar', 1)
// obj.set('foo', 'bar2', 2)
// obj.set('foo', 'bar3', 3)