/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function (firstList, secondList) {
  if (!firstList.length || !secondList.length){
    return []
  }
  const combinedList = []
  const [min, max] = firstList.length > secondList.length
    ? [secondList, firstList]
    : [firstList, secondList]
  for (let i = 0; i < min.length; i++) {
    combinedList.push([min[i][0], 1])
    combinedList.push([max[i][0], 1])
    combinedList.push([min[i][1], -1])
    combinedList.push([max[i][1], -1])
  }
  for (let i = min.length; i < max.length; i++) {
    combinedList.push([max[i][0], 1])
    combinedList.push([max[i][1], -1])
  }
  combinedList.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  const result = []
  let count = 0
  let start

  for (let i = 0; i < combinedList.length; i++) {
    count += combinedList[i][1]
    if (count === 2) {
      start = combinedList[i][0]
    } else if (count === 1 && combinedList[i][1] === -1) {
      result.push([start, combinedList[i][0]])
    }
  }
  return result
};

let firstList = [[1,3],[5,9]], secondList = []
console.log(intervalIntersection(firstList, secondList))
