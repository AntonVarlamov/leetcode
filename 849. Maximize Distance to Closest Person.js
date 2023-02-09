/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function (seats) {
  let max = 0;
  let isLeft = false;
  let isRight = false;
  for (let i = 0; i < seats.length; i++) {
    let count = 0
    while (seats[i] === 0) {
      count++
      i++
    }
    if (seats[i] === 1){
      isRight = true
    }
    max = Math.max(max, (isRight && isLeft ? count / 2 : count))
    isLeft = true
  }
  return max % 1 ? Math.trunc(max) + 1 : max
};
