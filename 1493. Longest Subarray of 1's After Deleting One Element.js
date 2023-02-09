/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  let sum = 0;
  let max = 0;
  let count = 0;
  let zero;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1) {
      sum++
    }
    else{
      if(count === 1){
        sum = i - zero - 1;
        count = 0
      }
      count++
      zero = i;
    }
    max = Math.max(max, sum);
  }
  return zero === undefined ? max - 1 : max;
};
let arr = [0,1,1,1,0,1,1,0,1]
console.log(longestSubarray(arr))

