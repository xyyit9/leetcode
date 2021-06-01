var lengthOfLongestSubstring = function (s) {
    let i = 0;
    const len = s.length;
    if (len === 0 || len === 1) {
      return len;
    }
    let res = Number.MIN_VALUE;
    let str = s[i];
    for (let j = 0; j < len; j++) {
      if (str.indexOf(s[j]) !== -1) {
        i = str.indexOf(s[j]) + 1;
        str = str.substring(i);
      }
      str += s[j];
      res = Math.max(res, str.length);
    }
    return res;
  };