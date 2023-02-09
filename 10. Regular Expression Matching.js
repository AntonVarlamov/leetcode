  /**
   * @param {string} s
   * @param {string} p
   * @return {boolean}
   */
  const isMatch = function(s, p) {
    return  (s.match(new RegExp(p)) ?? [])[0] === s
  };

let s = "ab", p = ".*"
console.log(isMatch(s, p))

