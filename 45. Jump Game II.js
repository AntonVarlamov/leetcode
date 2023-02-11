/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {

  let curCoverage = 0, lastJumpIdx = 0;

  // counter of jump
  let timesOfJump = 0;

  // Quick response if start index == destination index == 0
  if (nums.length === 1) {
    return 0;
  }


  // Greedy stragegy: extend coverage as long as possible with lazp jump
  for (let i = 0; i < nums.length; i++) {

    // extend coverage
    curCoverage = Math.max(curCoverage, i + nums[i]);

    // forced to jump (by lazy jump) to extend coverage
    if (i === lastJumpIdx) {

      lastJumpIdx = curCoverage;

      timesOfJump++;

      // check if we reached destination already
      if (curCoverage >= nums.length - 1) {
        return timesOfJump;
      }
    }
  }
  return timesOfJump;
};

let nums = [8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8, 7
  , 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8,
  5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5]

console.log(jump(nums))
