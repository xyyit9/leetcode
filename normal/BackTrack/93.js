/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  backTrack(s, 0, [], res);
  return res;
};

function backTrack(s, start, ans, res) {
  // 注意：start当前还未被递归，因此最后的终止条件是start == s.length，时刻记住这一点，下面的小细节很多
  if (ans.length === 4 && start === s.length) {
    // 片段满4段，且耗尽所有字符
    res.push(ans.join("."));
    return;
  }
  if (ans.length === 4 && start < s.length) {
    // 满4段，字符未耗尽，不用往下选了
    return;
  }
  for (let len = 1; len < 4; len++) {
    if (start + len > s.length) return; // 加上要切的长度就越界，不能切这个长度
    if (len != 1 && s[start] == "0") return; // 不能切出'0x'、'0xx'

    const str = s.substring(start, start + len);  // 当前选择切出的片段
    if (len == 3 && +str > 255) return; // 不能超过255

    ans.push(str); // 作出选择，将片段加入subRes
    dfs(ans, start + len); // 基于当前选择，继续选择，注意更新指针
    ans.pop(); // 上面一句的递归分支结束，撤销最后的选择，进入下一轮迭代，考察下一个切割长度
  }
}
