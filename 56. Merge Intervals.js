/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = []
  for (let i = 0; i < intervals.length; i++) {
    let prev = intervals[i]
    let max = intervals[i][1]
    while (max >= (intervals[i + 1] || [])[0]) {
      i++
      max = Math.max(max, intervals[i][1])
    }
    result.push([prev[0], max])
  }
  return result
};

let intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
console.log(merge(intervals))
