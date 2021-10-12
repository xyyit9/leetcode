/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

function palindrome(s, i, j) {
  while (s[i] === s[j] && i >= 0 && j < s.length) {
    i--;
    j++;
  }
  return s.substring(i + 1, j);
}
