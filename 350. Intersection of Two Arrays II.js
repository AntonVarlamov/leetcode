/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const [min, max] = nums1.length > nums2.length
    ? [nums2, nums1]
    : [nums1, nums2]
  const minValues = min.reduce((prev, cur) => {
    prev.set(cur, (prev.get(cur) || 0) + 1)
    return prev
  }, new Map())
  const result = []
  for (let i = 0; i < max.length && minValues.size !== 0; i++) {
    if (minValues.get(max[i])) {
      result.push(max[i])
      if (minValues.get(max[i]) === 1) {
        minValues.delete(max[i])
      } else {
        minValues.set(max[i], minValues.get(max[i]) - 1)
      }
    }
  }
  return result
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
console.log(intersect(nums1, nums2))
