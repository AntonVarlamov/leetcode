/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const countBracket = {
    '{': 0,
    '(': 0,
    '[': 0
  }
  const brackets = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (countBracket.hasOwnProperty(s[i])){
      countBracket[s[i]]++
      stack.push(s[i])
    } else {
      countBracket[brackets[s[i]]]--
      if (countBracket[brackets[s[i]]] < 0 || stack.pop() !== brackets[s[i]]){
        return false
      }
    }
  }
  return stack.length === 0
};

let s = "{"

console.log(isValid(s))
