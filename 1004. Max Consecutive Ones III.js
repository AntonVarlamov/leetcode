/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let count = 0;
  let zeroes = 0;
  const stack = [];
  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i])
    if (nums[i] === 0) {
      zeroes++
    }
    if (zeroes > k) {
      if (stack.shift() === 0){
        zeroes--
      }
    } else {
      count++
    }
  }
  return stack.length
};

let nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
console.log(longestOnes(nums, k))
