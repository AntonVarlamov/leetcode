/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function (jewels, stones) {
  return (stones.match(new RegExp(`[${jewels}]`, 'g')) || []).length
};

let jewels = "z", stones = "ZZ"
console.log(numJewelsInStones(jewels, stones))
