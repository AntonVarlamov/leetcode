/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  let map = {0: 1};
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(map[sum - k]){
      count += map[sum - k]
    }
    map[sum] =(map[sum] ?? 0) + 1 ;
  }

  return count;
};

let nums = [1, -1, 1, 1, 1, 1, 1, 1, 1, 1], k = 2;

console.log(subarraySum(nums, k))
