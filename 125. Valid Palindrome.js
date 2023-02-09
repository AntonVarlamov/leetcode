/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/gi, '')
  let r = s.length - 1
  let l = 0
  while (r > l) {
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false
    }
    r--
    l++
  }
  return true
};

let s = "0P"
console.log(isPalindrome(s))

