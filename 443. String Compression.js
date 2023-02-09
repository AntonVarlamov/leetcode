/**
 * @param {string[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let result = ''
  for (let i = 0; i < chars.length; i++) {
    let count = 1;
    const prev = chars[i]
    while (chars[i] === chars[i + 1]) {
      i++
      count++
    }
    result += prev
    if (count > 1) {
      result += count
    }
  }
  chars.splice(0, chars.length, ...result)
};
let chars = ["a","a","b","b","c","c","c"]
compress(chars)
console.log(chars)
