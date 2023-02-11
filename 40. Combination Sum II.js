/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);

  const queue = [{sum: 0, arr: [], index: 0}]

  while (queue.length > 0) {
    const {sum, arr, index} = queue.pop()

    if (sum === target) {
      result.push([...arr])
      continue
    }

    if (sum > target) {
      continue
    }

    for (let i = index; i < candidates.length; i++) {
      if (i !== index && candidates[i] === candidates[i - 1]) {
        continue
      }
      arr.push(candidates[i])
      queue.push({sum: sum + candidates[i], arr: [...arr], index: i + 1})
      arr.pop()
    }
  }

  return result;
};

let candidates = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], target = 30

console.log(combinationSum2(candidates, target))
