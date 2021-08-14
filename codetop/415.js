/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  let i = len1 - 1;
  let j = len2 - 1;
  let sum = [];
  let rad = 0;
  while (i >= 0 || j >= 0) {
    const r1 = num1[i] ? parseInt(num1[i]) : 0;
    const r2 = num2[j] ? parseInt(num2[j]) : 0;
    let total = r1 + r2 + rad;
    if (total > 9) {
      rad = 1;
      total = total % 10;
    } else {
      rad = 0;
    }
    sum.unshift(total);
    i--;
    j--;
  }
  if (rad !== 0) {
    sum.unshift(rad);
  }
  return sum.join("");
};

const res = addStrings("456", "77");
console.log(res);
