/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const result = []
  const sAlphabet = {}
  const pAlphabet = p
    .split('')
    .reduce((prev, cur) => ({...prev, [cur.charCodeAt(0)]: (prev[cur.charCodeAt(0)] || 0) + 1}), {})
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0)
    sAlphabet[index] = (sAlphabet[index] || 0) + 1
    if (i >= p.length - 1) {
      if (i > p.length - 1) {
        let headIndex = s[i - p.length].charCodeAt(0)
        sAlphabet[headIndex]--
        if (sAlphabet[headIndex] === 0) {
          delete sAlphabet[headIndex]
        }
      }
      if (check(sAlphabet, pAlphabet)) {
        result.push(i - p.length + 1)
      }
    }
  }

  function check(sAlphabet, pAlphabet) {
    for (const key in sAlphabet) {
      if (sAlphabet[key] !== pAlphabet[key]){
        return false
      }
    }
    return true
  }

  return result
};

let s = "cbaebabacd", p = "abc"

console.log(findAnagrams(s, p))
