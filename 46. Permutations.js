/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = function (nums) {

  const queue = [{value: [], alreadyExist: Array(nums.length).fill(false)}]
  const result = []

  while (queue.length > 0) {
    const {value, alreadyExist} = queue.pop()
    if (value.length === nums.length) {
      result.push(value)
      continue
    }
    for (let i = 0; i < nums.length; i++) {
      if (!alreadyExist[i]) {
        alreadyExist[i] = true
        value.push(nums[i])
        queue.push({value: [...value], alreadyExist: [...alreadyExist]})
        value.pop()
        alreadyExist[i] = false
      }
    }
  }
  return result
};

const permute = function (nums) {
  function dfs(nums, path, allPaths, start, used) {
    if (start === nums.length) {
      allPaths.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, path, allPaths, start + 1, used);
      used[i] = false;
      path.pop();
    }
  }

  const path = [];
  const allPaths = [];
  const used = new Array(nums.length).fill(false);
  dfs(nums, path, allPaths, 0, used);
  return allPaths;

};

let nums = []

for (let i = 0; i < 8; i++) {
  nums[i] = i
}
let start


start = Date.now()
permute(nums)
console.log(Date.now() - start)
start = Date.now()
permute1(nums)
console.log(Date.now() - start)
