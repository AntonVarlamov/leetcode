/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let max = 0
  let open = 0
  let close = 0

  const bracketMap = {
    '(': function () {
      open++
    },
    ')': function () {
      close++
    }
  }

  for (let i = 0; i < s.length; i++) {
    bracketMap[s[i]]()
    if (open === close) {
      max = Math.max(open * 2, max)
    } else if (close > open) {
      open = close = 0;
    }
  }
  open = close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    bracketMap[s[i]]()
    if (open === close) {
      max = Math.max(open * 2, max)
    } else if (close < open) {
      open = close = 0;
    }
  }

  return max
};

let s = "()()(()()()()()"
console.log(longestValidParentheses(s))
