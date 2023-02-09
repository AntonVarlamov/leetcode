/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let _sLen = s.length;

  let i = 0;
  let j = 0;

  let obj = {};
  let res = 0;

  while (i < _sLen && j < _sLen) {
    i = Math.max(obj[s[j]] || 0, i);
    res = Math.max(res, j - i + 1);
    obj[s[j]] = j + 1;
    j++;
  }
  return res;
};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))
