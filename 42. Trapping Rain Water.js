/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  const values = {}
  height.forEach(value => {
    values[value] = (values[value] || 0) + 1
  })
  let arr = Object.keys(values)
  let max = +arr.pop()
  let result = 0
  for (let i = 0; i < height.length; i++) {
    let prev = height[i]
    values[prev]--
    if (values[prev] === 0){
      delete values[prev]
    }
    while (!values[max] && arr.length){
      max = +arr.pop()
    }
    if (prev > max){
      prev = max
    }
    let count = 0
    while (prev > height[i + 1]) {
      i++
      values[height[i]]--
      if (values[height[i]] === 0){
        delete values[height[i]]
      }
      while (!values[max] && arr.length){
        max = +arr.pop()
      }
      count += prev - height[i]
    }
    result += count
  }
  return result
};

let height = [6,4,2,0,3,2,0,3,1,4,5,3,2,7,5,3,0,1,2,1,3,4,6,8,1,3]
let start = Date.now()
console.log(trap(height))
console.log(Date.now() - start)
