/**
 * @param {string} s
 * @return {number}
 */
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) {
      return s.length
  }
  let l = 0;
  let r = 1
  let res = 0
  while (r < s.length) {
      const str = s.substring(l, r)
      if (str.indexOf(s[r]) !== -1) {
          res = Math.max(res, r - l)
          // 将字符串内重复字符的下一个作为左指针
          l = s.substring(0, r).lastIndexOf(s[r]) + 1
      }
      r++
  }
  // 一整个字符串都是不相同的字符，则没有进入重复判断中，需要在循环外计算一次长度
  res = Math.max(res, r - l)
  return res
};
