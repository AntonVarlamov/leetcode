function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  const stack = [root]
  const arrMinMax = [[null, null]]
  while (stack.length) {
    const curVertex = stack.pop()
    const [min, max] = arrMinMax.pop()
    if (min!==null && curVertex.val <= min) {
      return false
    }
    if (max!==null && curVertex.val >= max) {
      return false
    }
    if (curVertex.left){
      stack.push(curVertex.left)
      arrMinMax.push([min, curVertex.val])
    }
    if (curVertex.right){
      stack.push(curVertex.right)
      arrMinMax.push([curVertex.val, max])
    }
  }
  return true
};
