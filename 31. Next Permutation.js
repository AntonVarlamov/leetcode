/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }

  function reverse(index) {
    let start = index, end = nums.length - 1
    while (end > start) {
      swap(start, end)
      start++
      end--
    }
  }

  function nextLarge(index) {
    for (let i = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) {
        return i
      }
    }
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      let indexLarge = nextLarge(i)
      swap(i, indexLarge)
      reverse(i + 1)
      return
    }
  }
  nums.reverse()
};

let arr = [2, 3, 1]
nextPermutation(arr)
console.log(arr)
