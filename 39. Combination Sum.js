/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const result = [];

  const queue = [{index: 0, arr: [], sum: 0}]

  while (queue.length > 0) {
    const {index, arr, sum} = queue.pop()
    if (sum > target){
      continue
    }
    if (sum === target){
      result.push([...arr])
      continue
    }
    for (let i = index; i < candidates.length; i++) {
      queue.push({index: i, arr: [...arr, candidates[i]], sum: sum + candidates[i]})
    }
  }
  return result
};

let candidates = [10,1,2,7,6,1,5], target = 8


console.log(combinationSum(candidates, target))
