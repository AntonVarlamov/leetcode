/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i];
    while (nums[i + 1] - nums[i] === 1) {
      i++
    }
    if (nums[i] === prev) {
      result.push(prev.toString())
    } else {
      result.push(`${prev}->${nums[i]}`)
    }
  }
  return result
};
let arr = [0,2,3,4,6,8,9]
console.log(summaryRanges(arr))
