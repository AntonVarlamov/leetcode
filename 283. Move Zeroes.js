/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let count = 0;
  const arr = nums.filter(value => {
    if (value === 0) {
      count++
    }
    return value !== 0
  })
  nums.splice(0, nums.length, ...arr, ...new Array(count).fill(0))

};

let nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)
