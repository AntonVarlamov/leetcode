/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  return (s.match(new RegExp(p.replace('*', '.*').replace('?', '.?'))) ?? [])[0] === s
};
let s = "cb", p = "?a"
console.log(isMatch(s, p))
