/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  let result = []
  const generator = (l, r, str) => {
    if (str.length === n * 2) {
      result.push(str)
      return
    }
    if (l < n) {
      generator(l + 1, r, str + '(')
    }
    if (r < l) {
      generator(l, r + 1, str + ')')
    }
  }
  generator(0, 0, '')
  return result
};

let n = 3

console.log(generateParenthesis(n))
