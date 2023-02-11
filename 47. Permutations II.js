/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  function dfs(value, alreadyExist, allPermute) {
    if (value.length === nums.length) {
      allPermute.add(value.join(','))
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (!alreadyExist[i]) {
        alreadyExist[i] = true
        value.push(nums[i])
        dfs(value, alreadyExist, allPermute)
        alreadyExist[i] = false
        value.pop()
      }
    }
  }
  
  const allPermute = new Set
  const alreadyExist = Array(nums.length).fill(false)
  const value = []
  dfs(value, alreadyExist, allPermute)


  return [...allPermute].map(value => value.split(','))
};

let nums = [1,1,3]

console.log(permuteUnique(nums))
