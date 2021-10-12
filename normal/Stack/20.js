/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // 遇到右括号就做出栈，看是否匹配
      const item = stack.pop();
      if (item !== map.get(s[i])) {
        return false;
      }
      // 左括号都入栈
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
