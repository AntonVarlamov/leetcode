/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return 0
  }
  let result = []
  let f = 0;
  let s = 0;
  let isEven = !(((nums1.length + nums2.length) / 2) % 1)
  let index = Math.trunc((nums1.length + nums2.length) / 2)
  while (result.length <= index) {
    if (nums1[f] >= nums2[s] && nums2.length > s || nums1.length <= f) {
      result.push(nums2[s])
      s++
    } else {
      result.push(nums1[f])
      f++
    }
  }

  return isEven ? (result[index] + result[index - 1]) / 2 : result[index]
};

let nums1 = [], nums2 = []
console.log(findMedianSortedArrays(nums1, nums2))
