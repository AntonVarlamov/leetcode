/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const result = []
  const obj = {}
  let index = 0
  for (let i = 0; i < strs.length; i++) {
    const sortStr = strs[i].split('').sort().join('')
    if (obj.hasOwnProperty(sortStr)){
      result[obj[sortStr]].push(strs[i])
    } else {
      obj[sortStr] = index
      result[index] = [strs[i]]
      index++
    }
  }
  return result
};
let strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))
