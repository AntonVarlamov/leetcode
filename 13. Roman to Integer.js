/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let result = 0
  const prices = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  for (let i = 0; i < s.length; i++) {
    let a = s[i] + s[i + 1]
    if (prices.hasOwnProperty(s[i] + s[i + 1])) {
      result += prices[s[i] + s[i + 1]]
      i++
    } else if (prices.hasOwnProperty(s[i])) {
      result += prices[s[i]]
    }
  }
  return result
};

let s = "MCMXCIV"

console.log(romanToInt(s))
