/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  const nums = nums1.slice(0, m)
  let i1 = 0
  let i2 = 0
  for (let i = 0; i < nums1.length; i++) {
    if (nums[i1] < nums2[i2] || nums2[i2] === undefined) {
      nums1[i] = nums[i1]
      i1++
      continue
    }
    if (nums[i1] > nums2[i2] || nums[i1] === undefined) {
      nums1[i] = nums2[i2]
      i2++
      continue
    }
    if (nums[i1] === nums2[i2]) {
      nums1[i] = nums[i1]
      i++
      nums1[i] = nums[i1]
      i1++
      i2++
    }
  }
};

let nums1 = [0], m = 0, nums2 = [1], n = 1
merge(nums1, m, nums2, n)
console.log(nums1)
