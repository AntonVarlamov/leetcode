/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    while(s[i] === s[i + 1]){
      i++
      count++
    }
    max = Math.max(max, count)
  }
  return max
};

let s = "leetcode"
console.log(maxPower(s))
