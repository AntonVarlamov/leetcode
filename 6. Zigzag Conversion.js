/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  let result = "";
  let cycle = 2 * (numRows - 1);
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += cycle) {
      result += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + cycle - i < s.length) {
        result += s[j + cycle - i];
      }
    }
  }
  return result;
};
let s = "A", numRows = 1
console.log(convert(s, numRows))
