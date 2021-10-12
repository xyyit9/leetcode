/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    let map = new Map()
    // 先把t中每个字符有多少个，用哈希表存储起来
    for (let str of t) {
        map.set(str, map.has(str) ? map.get(str) + 1 : 1)
    }
    let left = 0
    let right = 0
    let res = ""
    // needType必须是map.size，而不能是t中所有字符的总和，因为可能存在s='bba' t='ab'，则会出现「bb」以为满足要求的情况
    let needType = map.size
    while (right < s.length) {
        let ch = s[right]
        // 右指针不断向右移动，如果是t中存在的字符，则更新哈希表
        if (map.has(ch)) {
            map.set(ch, map.get(ch) - 1)
            if (map.get(ch) === 0) {
                needType -= 1;
            }

        }
        // 如果t中的每一个字符都出现在window中，则要收缩左指针
        while (needType === 0) {
            let cl = s[left]
            // 如果是初始化，或者比res的长度小，则更新res
            if (res.length === 0 || res.length > right - left + 1) {
                res = s.substring(left, right + 1)
            }
            // 在左指针向右移动，更新哈希表
            if (map.has(cl)) {
                map.set(cl, map.get(cl) + 1)
                if (map.get(cl) === 1) {
                    needType += 1
                }
            }
            left++
        }
        right++
    }
    return res
};