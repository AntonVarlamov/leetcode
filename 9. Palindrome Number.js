/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const str = x.toString()
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]){
      return false
    }
  }
  return true
};

let x = 10
console.log(isPalindrome(x))
