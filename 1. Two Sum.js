/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const object = {}
  object[target - nums[0]] = 0
  for (let i = 1; i < nums.length; i++) {
    if (!object.hasOwnProperty(target - nums[i])){
      object[target - nums[i]] = i
    }
    if (object.hasOwnProperty(nums[i]) && object[nums[i]] !== i){
      return [object[nums[i]], i]
    }
  }
  return []
};

let nums = [2,5,5,11], target = 10
console.log(twoSum(nums, target))
